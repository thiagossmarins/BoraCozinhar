import { PropsWithChildren } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { BoxProps, createRestyleComponent, spacing, layout, border, backgroundColor } from "@shopify/restyle";

import { Theme } from "@theme";

export type TouchableOpacityBoxProps = PropsWithChildren<BoxProps<Theme> & TouchableOpacityProps>

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>([spacing, layout, border, backgroundColor], TouchableOpacity);