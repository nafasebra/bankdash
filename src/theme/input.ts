import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

export const Input = defineMultiStyleConfig({
  baseStyle: {
    field: {
      h: "50px",
      py: 4,
      px: 5,
    },
  },
  variants: {
    outline: {
      field: {
        border: "1px solid",
        borderColor: "light.200",
        _placeholder: {
          color: "primary.400",
        },
      },
    },
  },
  defaultProps: {
    variant: 'outline'
  }
});
