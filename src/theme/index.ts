import { extendTheme } from '@chakra-ui/react';
import * as colors from './colors';
import { Button } from './button';
import { Input } from './input';
import { Switch } from './switch';
import { Popover } from './popover';
import { Card } from './card';

export const theme = extendTheme({
  colors: colors,
  components: {
    Button,
    Input,
    Switch,
    Popover,
    Card
  }
});