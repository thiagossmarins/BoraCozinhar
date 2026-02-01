import { createText } from '@shopify/restyle';


import { Theme } from '../../theme/theme';

interface TextProps {
  thin?: boolean,
  regular?: boolean,
  medium?: boolean,
  bold?: boolean,
}

export const Text = createText<Theme & TextProps>();