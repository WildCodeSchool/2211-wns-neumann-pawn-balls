import { ApolloProvider } from '@apollo/client';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { client } from './gql/client';
import HomeScreen from './screens/Home.screen';
import LoginScreen from './screens/Login.screen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="LoginScreen" component={LoginScreen} />
          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
