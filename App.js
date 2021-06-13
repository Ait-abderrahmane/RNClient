import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from "./src/Screens/Login";
import { Dashboard } from "./src/Screens/Dashboard";
import { HomeScreen } from "./src/Screens/HomeScreen";
import { Provider } from 'react-native-paper';
import { theme } from './src/core/theme';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import {
//   HomeScreen,
//   LoginScreen,
//   RegisterScreen,
//   ForgotPasswordScreen,
//   Dashboard,
// } from './src/screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    // LoginScreen,
    // RegisterScreen,
    // ForgotPasswordScreen,
    // Dashboard,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
export default function App() {
  return (
    <Provider theme={theme}>
    {/* <App /> 
    */}
    <Router/>
  </Provider>



  );
}


// import React from 'react';
// import { Provider } from 'react-native-paper';
// import App from './src';
// import { theme } from './src/core/theme';

// const Main = () => (
//   <Provider theme={theme}>
//     <App />
//   </Provider>
// );

// export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
