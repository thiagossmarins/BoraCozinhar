import { ImageBackground } from "react-native";

import { Screen, Text, Button, Box, Input } from "@components";
import { useAppSafeArea } from "@hooks";

export function SignUpScreen() {
  const { top, bottom } = useAppSafeArea();

  return (
    <Screen>
      <ImageBackground
        source={require('src/assets/images/background__detail.png')}
        resizeMode="cover"
        style={{
          position: 'absolute',
          top: -top - 60,
          left: 0,
          right: 0,
          bottom: -bottom,
          zIndex: -1,
          height: 500
        }} />

      <Box flex={1} justifyContent="flex-end" mt="xl">

        <Text mb="l" variant="header">Crie sua conta</Text>

        <Input
          label="Nome*"
          placeholder="Digite seu nome"
        />

        <Input
          label="E-mail*"
          placeholder="Digite um e-mail"
          autoCapitalize="none"
        />

        <Input
          label="Senha*"
          placeholder="Digite uma senha"
          secureTextEntry
        />

        <Input
          label="Confirmar senha*"
          placeholder="Confirme a sua senha"
          secureTextEntry
        />

        <Box mt="xl">
          <Button title="Criar conta agora!" />
          <Text variant="body" textAlign="center" mt="m">Já tem uma conta? Entrar</Text>
        </Box>

      </Box>
    </Screen>
  )
}