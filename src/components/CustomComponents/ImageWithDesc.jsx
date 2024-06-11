import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ImageWithDesc = ({ imageSrc = '' , reverseRow = false , heading = 'Product Heading' , description = 'Product Description' }) => {

    const rowDirection = reverseRow ? 'row' : 'row-reverse'

  return (
    <Box>
        <Flex flexDir={['column' , rowDirection]} w="100%" >
            <Image src={imageSrc} objectFit='cover' w={['100%' , '50%']} />
            <Flex  w={['100%' , '50%']} flexDir='column' justifyContent='center' gap='2rem' alignItems='center' p='2rem' >
                <Heading>{heading}</Heading>
                <Text>{description}</Text>
                <Button w='10rem' bgColor='#FF38BD' color='white' _hover={{opacity : '70%'}} >Buy Now</Button>
            </Flex>
        </Flex>
    </Box>
  )
}

export default ImageWithDesc