import DashboardStack from '@dashboard/index';
import { NavigationContainer } from '@react-navigation/native';
import Storage from '@utils/async-storage';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import AuthenticationStack from './src/features/authentication';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
  PreferencesContext,
} from '@config/theme';

export const AuthContext = createContext({});

const App: React.FC = () => {
  const [isReady, setReady] = useState<boolean>(false);
  const [shouldOnboard, setOnboard] = useState<boolean>(true);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [isThemeDark, setIsThemeDark] = React.useState(false);

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
      logOut: () => {},
      register: async (_: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      setReady(true);
      const shouldOnboardLocal = await Storage.getItem('onboarding', true);
      if (shouldOnboardLocal) {
        setOnboard(shouldOnboard);
        setReady(true);
      }
      isReady;
      shouldOnboard;
      setLoggedIn;
      // const userToken = await Storage.getItem('userToken');
    };

    bootstrapAsync();
  }, []);

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
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            {isLoggedIn ? DashboardStack() : AuthenticationStack()}
          </NavigationContainer>
        </PaperProvider>
      </AuthContext.Provider>
    </PreferencesContext.Provider>
  );
};

export default App;
