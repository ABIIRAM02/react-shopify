import {  Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const RichText = ( {heading = '' , description = ''} ) => {
  return (
    <VStack justifyContent='center' alignItems='center' gap='5' p='2.5rem' h='35vh' >
        <Heading>{heading}</Heading>
        <Text fontWeight='semibold' >{description}</Text>
    </VStack>
  )
}

export default RichText