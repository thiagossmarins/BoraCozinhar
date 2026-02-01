import { createStackNavigator } from '@react-navigation/stack';

import { SignUpScreen } from '@screens';

type AuthStackParamList = {
  SignUpScreen: undefined,
}

const RootStack = createStackNavigator<AuthStackParamList>();

export function AuthStack() {

  return (
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  )
}