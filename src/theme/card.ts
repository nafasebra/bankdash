import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: '#ffffff',
    rounded: 'lg',
    p: 6,
    overflow: 'hidden'
  },
})

export const Card = defineMultiStyleConfig({ baseStyle })