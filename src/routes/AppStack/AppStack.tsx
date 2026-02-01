import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '@screens';

type AppStackParamList = {
  HomeScreen: undefined,
}

const RootStack = createStackNavigator<AppStackParamList>();

export function AppStack() {

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
    </RootStack.Navigator >
  )
}