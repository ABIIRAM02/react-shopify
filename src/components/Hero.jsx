import { Box, Button, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Box bgColor='#FFA8E2' color='white' position='relative' h='60vh' >
        <Image src='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.png' h='100%' m='auto' objectFit='contain' objectPosition='top' />
        <Text
        position='absolute'
        bottom='20%'
        w='100%'
        textAlign='center'
        color='white'
        fontWeight='bold'
        fontSize='4rem'
        >Introducing Bath Bombs</Text>
        <Center>
            <Button w='10rem' bgColor='#FF38BD' color='white' _hover={{opacity:'70%'}} position='absolute' bottom='10%' >Shop now</Button>
        </Center>
    </Box>
  )
}

export default Hero