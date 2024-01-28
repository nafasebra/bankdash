import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: '500',
    fontSize: '16px',
  },
  variants: {
    solid: {
      rounded: 'md',
      h: 12,
      bg: `primary.100`,
      textColor: 'white',

      _hover: {
        bg: `primary.300`,
      },
    },
  },
  defaultProps: {variant: 'solid'}
});