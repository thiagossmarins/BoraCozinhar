

import { Alert } from "react-native";

import { Button, Screen, Text } from "@components";

export function HomeScreen() {

  return (
    <Screen>
      <Text variant='header'>Olá!</Text>
      <Button title='Clicar no botão' onPress={() => Alert.alert('testando')} />
    </Screen>
  )
}