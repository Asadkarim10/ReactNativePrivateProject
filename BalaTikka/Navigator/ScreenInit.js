
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../screens/home'
import Adress from '../screens/Adress'
import Branch from '../screens/branch'
import Delivery from '../screens/Delivery'
import DeliveryAddress from '../screens/deliveryAddress'
import Itemlist from '../screens/Itemlist'
import UserDetail from '../screens/UserDetail'
import Login from '../screens/login'
import Signup from '../screens/signup'
import SelectBranch from '../screens/selectBranch'





const Stack = createStackNavigator();



const screenOptionStyle = {
  headerTransparent: false,
  headerTitle: null,
  headerLeft: null,
};

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};


function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="branch" component={Branch} />
        <Stack.Screen name="Delivery" component={Delivery} />
        <Stack.Screen name="Itemlist" component={Itemlist} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="deliveryAddress" component={DeliveryAddress} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="selectBranch" component={SelectBranch} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
    </Stack.Navigator>
  );
}




export default MyStack;

