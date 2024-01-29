import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  body: {
    padding: 3,
  },
  content: {
    bg: "white",
    rounded: 'md',
    boxShadow: '0 0 10px rgb(244,244,244)',
    border: 'none',
  },
  header: {
    borderColor: 'light.200',
  },
  footer: {
    borderColor: 'light.200',
  }
});
export const Popover = defineMultiStyleConfig({ baseStyle });
