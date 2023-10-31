import { React, useContext, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-native-paper';
import { theme } from './core/theme';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import Home from './components/home/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Hello from './screens/Hello';

import AuthContextProvider, { AuthContext } from './store/auth-context';
import ProductList from './components/products/ProductList';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: theme.colors.tertiary },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: theme.colors.tertiary },
    }}>
      <Stack.Screen name="Products" component={ProductList} />
    </Stack.Navigator>
  )
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (   
      <NavigationContainer>
        { !authCtx.isAuthenticated && <AuthStack />}
        { authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
  );
}

const App = () => {
  return (
    <>
      <Provider theme={theme}>
          <StatusBar style="light" />
          <AuthContextProvider>
            <Navigation />
          </AuthContextProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});

export default App;
