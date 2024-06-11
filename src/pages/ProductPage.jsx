import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../utils/context/ContextForShop'
import { useParams } from 'react-router-dom'
import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'

const ProductPage = () => {

  const {id} = useParams()
  const { fetchProductById , addItemToCheckout , product } = useContext(ShopContext)
  

  useEffect(()=>{
    fetchProductById(id)
  } , [id])

  if(!product.title) return <h2>Loading...</h2>

  return (
    <Box>
      <Grid templateColumns={['repeat(1, 1fr)' ,'repeat(1, 1fr)', 'repeat(2, 1fr)']} m='1rem' gap={5} >
       <Flex alignItems='center' justifyContent='center' >
       <Image rounded={4} src={product.images[0].src} />
       </Flex>
        <Flex flexDirection='column' alignItems='center' justifyContent='center' gap={10}>
          <Heading>{product.title}</Heading>
          <Text fontWeight='bold' >$ {product.variants[0].price.amount}</Text>
          <Text>{product.description}</Text>
          <Button _hover={{opacity:'70%'}} px='4rem' bgColor='#FF38BD' color='white' onClick={()=>{
            addItemToCheckout(product.variants[0].id , 1)
          }} >Add to cart</Button>
        </Flex >
      </Grid>
    </Box>
  )
}

export default ProductPage