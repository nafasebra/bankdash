import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  track: {
    bg: 'light.200',
    _checked: {
      bg: 'cyan',
    },
  },
})

export const Switch = defineMultiStyleConfig({ baseStyle })