import { ButtonProps as RNButtonProps, TouchableOpacity } from 'react-native'

import { useTheme } from '@shopify/restyle'

import { Text } from '@components'
import { Theme } from '@theme';


interface ButtonProps extends RNButtonProps {

}

export function Button({ title, onPress }: ButtonProps) {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.cardPrimaryBackground,
        paddingVertical: theme.spacing.m,
        paddingHorizontal: theme.spacing.l,
        borderRadius: theme.borderRadii.s,
      }}
      onPress={onPress}
    >
      <Text
        variant='body'
        color='textPrimary'
        textAlign='center'
        fontWeight={600}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}