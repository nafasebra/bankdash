import { extendTheme } from '@chakra-ui/react';
import * as colors from './colors';
import { Button } from './button';

export const theme = extendTheme({
  colors: colors,
  components: {
    Button
  }
});