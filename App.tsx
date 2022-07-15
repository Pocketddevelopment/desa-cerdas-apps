import AuthenticationScreens from '@authentication/index';
import Logout from '@components/Logout';
import ModalSelectorScreen, {
  ModalSelectorScreenProps,
} from '@components/ModalSelect';
import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
  PreferencesContext,
} from '@config/theme';
import toastConfig from '@config/toast';
import StoreConstants from '@constants/store';
import DashboardScreens from '@dashboard/index';
import { firebase } from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { persistor, store } from '@store/store';
import Storage from '@utils/async-storage';
import { navigationRef } from '@utils/navigation';
import moment from 'moment';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
moment.locale('id');

export const Stack = createNativeStackNavigator();
export const AuthContext = createContext({});

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  const [isReady, setReady] = useState<boolean>(false);
  const [initialRouteName, setInitialRouteName] = useState<string>();

  useEffect(() => {
    async function getToken() {
      process.env.NODE_ENV !== 'production' &&
        console.log('Firebase Token', await firebase.messaging().getToken());
    }
    getToken();
  }, []);

  const getInitialRouteName = useCallback(async () => {
    if (!isLoggedIn && !initialRouteName) {
      const isAutoLogin = await Storage.getItem(
        StoreConstants.AUTO_LOGIN,
        false
      );
      if (isAutoLogin) {
        setLoggedIn(true);
      }
      const shouldOnboardLocal = await Storage.getItem(
        StoreConstants.ONBOARDING,
        'true'
      );
      if (shouldOnboardLocal === 'true') {
        setInitialRouteName('Onboarding');
      } else {
        setInitialRouteName('Login');
      }
      return;
    }
  }, [isLoggedIn, initialRouteName]);

  useEffect(() => {
    async function getDefaultRoot() {
      await getInitialRouteName();
    }
    if (!isReady) {
      getDefaultRoot();
    }
  }, [isReady]);

  useEffect(() => {
    if (initialRouteName) {
      setReady(true);
    }
  }, [initialRouteName]);

  const authContext = useMemo(
    () => ({
      logIn: async (_: any) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        setLoggedIn(true);
      },
      logOut: () => {
        setLoggedIn(false);
        setReady(false);
        setInitialRouteName(undefined);
        Storage.clearItem();
        Storage.setItem(StoreConstants.ONBOARDING, false);
      },
    }),
    []
  );

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  //@ts-ignore
  return (
    <PreferencesContext.Provider value={preferences}>
      <AuthContext.Provider value={authContext}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <PaperProvider theme={theme}>
              {isReady && initialRouteName && (
                <NavigationContainer ref={navigationRef} theme={theme}>
                  <Stack.Navigator initialRouteName={initialRouteName}>
                    {isLoggedIn ? DashboardScreens() : AuthenticationScreens()}
                    <Stack.Group
                      screenOptions={{
                        presentation: 'transparentModal',
                        headerShown: false,
                      }}>
                      <Stack.Screen
                        name='ModalSelector'
                        component={ModalSelectorScreen}
                      />
                      <Stack.Screen name='Logout' component={Logout} />
                    </Stack.Group>
                  </Stack.Navigator>
                  {/** @ts-ignore */}
                  <Toast config={toastConfig} position={'bottom'} />
                </NavigationContainer>
              )}
            </PaperProvider>
          </PersistGate>
        </Provider>
      </AuthContext.Provider>
    </PreferencesContext.Provider>
  );
};

export default App;

export type RootStackParamList = {
  Logout: undefined;
  ModalSelector: ModalSelectorScreenProps;
};
