import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: '500',
    fontSize: '16px',
  },
  variants: {
    solid: ({ colorScheme }) => ({
      rounded: 'md',
      h: 12,
      bg: `${colorScheme}.100`,
      textColor: 'white',

      _hover: {
        bg: `${colorScheme}.300`,
      },
    }),
  },
});