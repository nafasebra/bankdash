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
    search: {
      field: {
        height: "50px",
        borderRadius: "100px",
        backgroundColor: "light.100",
        py: 3,
        pl: 14,
        pr: 4,
        color: "primary.400",
        outline: "none",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        boxShadow: "none",
        _focus: {
          bg: "white",
          boxShadow: "none",
        },
        _focusVisible: {
          bg: "white",
          boxShadow: "none",
        },
      },
    },
    custom: {
      field: {
        h: "50px",
        borderRadius: "full",
        backgroundColor: "light.100",
        py: 3,
        px: 4,
        color: "primary.400",
        outline: "none",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        _focus: {
          backgroundColor: "white",
        },
        _focusVisible: {
          backgroundColor: "white",
        },
      },
    }
  },
  defaultProps: {
    variant: 'outline'
  }
});
