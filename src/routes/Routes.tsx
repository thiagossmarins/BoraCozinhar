import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack/AppStack'
import { AuthStack } from './AuthStack/AuthStack';

export function Routes() {
  const isSignedIn = false;

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  )
}