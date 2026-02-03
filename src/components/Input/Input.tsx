import { StyleSheet, TextInput } from "react-native";
import { TextInputProps as RNTextInputProps } from 'react-native'

import { Box, Text } from "@components";



interface InputProps extends RNTextInputProps {
  label: string,
  placeholder: string,
}

export function Input({ label, placeholder, ...rest }: InputProps) {
  return (
    <Box mb="m">
      <Text variant="body" mb="s">{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...rest} />
    </Box>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 8,
    padding: 10,
  }
})