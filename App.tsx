/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import DashboardStack from '@dashboard/index';
import { NavigationContainer } from '@react-navigation/native';
import Storage from '@utils/async-storage';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import AuthenticationStack from './src/features/authentication';

export const AuthContext = createContext({});

const App: React.FC = () => {
  const [isReady, setReady] = useState<boolean>(false);
  const [shouldOnboard, setOnboard] = useState<boolean>(true);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

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
        console.log(isLoggedIn);
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

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isLoggedIn ? DashboardStack() : AuthenticationStack()}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
