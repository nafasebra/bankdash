import { extendTheme } from '@chakra-ui/react';
import * as colors from './colors';
import { Button } from './button';
import { Input } from './input';
import { Switch } from './switch';

export const theme = extendTheme({
  colors: colors,
  components: {
    Button,
    Input,
    Switch
  }
});