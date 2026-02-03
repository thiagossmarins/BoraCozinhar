import { createStackNavigator } from '@react-navigation/stack';

import { SignUpScreen, SignInScreen } from '@screens';

type AuthStackParamList = {
  SignUpScreen: undefined,
  SignInScreen: undefined,
}

const RootStack = createStackNavigator<AuthStackParamList>();

export function AuthStack() {

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    </RootStack.Navigator>
  )
}