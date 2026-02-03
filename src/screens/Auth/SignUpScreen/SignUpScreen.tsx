import { Alert, ImageBackground, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "src/routes/AuthStack/AuthStack";

import { Screen, Text, Button, Box, Input } from "@components";
import { useAppSafeArea } from "@hooks";

type SignUpScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignUpScreen'>

export function SignUpScreen({ navigation }: SignUpScreenProps) {

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
        <Box flex={1} justifyContent="flex-end" mt="xl" >

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
            <Button title="Criar conta agora!" onPress={() => Alert.alert('Conta criada com sucesso')} />
            <Box flexDirection="row" alignItems="center" justifyContent="center">
              <Text variant="body" textAlign="center" marginVertical="m">Já tem uma conta? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                <Text textDecorationLine="underline">Entrar</Text>
              </TouchableOpacity>
            </Box>
          </Box>

        </Box>
      </KeyboardAvoidingView>

    </Screen>
  )
}