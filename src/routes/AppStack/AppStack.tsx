import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, RecipeScreen } from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined,
  RecipeScreen: { recipeId: string },
}

const RootStack = createStackNavigator<AppStackParamList>();

export function AppStack() {

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="RecipeScreen" component={RecipeScreen} />
    </RootStack.Navigator>
  )
}