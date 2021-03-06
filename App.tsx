import AuthenticationScreens from '@authentication/index';
import ModalSelectorScreen, {
  ModalSelectorScreenProps,
} from '@components/ModalSelect';
import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
  PreferencesContext,
} from '@config/theme';
import toastConfig from '@config/toast';
import DashboardScreens from '@dashboard/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { persistor, store } from '@store/store';
import Storage from '@utils/async-storage';
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

export const Stack = createNativeStackNavigator();
export const AuthContext = createContext({});

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  const [isReady, setReady] = useState<boolean>(false);
  const [initialRouteName, setInitialRouteName] = useState<string>();

  const getInitialRouteName = useCallback(async () => {
    if (!isLoggedIn && !initialRouteName) {
      const shouldOnboardLocal = await Storage.getItem('shouldOnboard', 'true');
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
                <NavigationContainer theme={theme}>
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
  ModalSelector: ModalSelectorScreenProps;
};
