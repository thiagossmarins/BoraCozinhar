import { ImageBackground, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Screen, Text, Button, Box, Input } from "@components";
import { useAppSafeArea } from "@hooks";
import { AuthStackParamList } from "@routes";

type SignInScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignInScreen'>

export function SignInScreen({ navigation }: SignInScreenProps) {
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

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Box flex={1} justifyContent="center" mt="xl">

          <Text mb="l" variant="header">Entre com sua conta</Text>

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

          <Box mt="xl">
            <Button title="Entrar agora!" />
            <Box flexDirection="row" alignItems="center" justifyContent="center">
              <Text variant="body" textAlign="center" marginVertical="m">Não tem uma conta? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <Text textDecorationLine="underline">Criar sua conta</Text>
              </TouchableOpacity>
            </Box>
          </Box>

        </Box>
      </KeyboardAvoidingView>

    </Screen>
  )
}