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
    light: {
      bg: 'light.100',
      color: 'gray.800',
      minW: '50px',
      h: '50px',
      rounded: 'full',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem'
    }
  },
  defaultProps: {variant: 'solid'}
});