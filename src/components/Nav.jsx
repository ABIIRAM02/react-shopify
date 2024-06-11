import React, { useContext } from 'react'
import { ShopContext } from '../utils/context/ContextForShop'
import { Image , Icon , Flex, Text, Box, Badge } from '@chakra-ui/react'
import { MdMenu , MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Nav = () => {

    const { checkout , handleMenuPresence , handleCartPresence } = useContext(ShopContext)

  return (
    <Flex bgColor='#FFA8E2' justifyContent='space-around' py='1rem' alignItems='center' >
        <Icon
        onClick={()=>{handleMenuPresence()}}
        fill='white' cursor='pointer' as={MdMenu} h={30} w={30} />
        <Link to='/' ><Image src='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540' w={100} h={100} /></Link>
        <Box p='8px' position='relative' >
        <Icon onClick={handleCartPresence} fill='white' cursor='pointer' as={MdShoppingBasket} h={30} w={30} />
        <Badge position='absolute' right='0px' top='0px' bg='rosybrown' rounded='8' >{checkout.lineItems?.length}</Badge>
        </Box>

    </Flex>
  )
}

export default Nav