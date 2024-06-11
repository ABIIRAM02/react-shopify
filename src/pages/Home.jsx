import React, { useContext, useEffect } from "react";
import { ShopContext } from "../utils/context/ContextForShop";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image, VStack } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ImageWithDesc from "../components/CustomComponents/ImageWithDesc";
import RichText from "../components/CustomComponents/RichText";

const Home = () => {
  const { products, isCartOpen, fetchAllProducts } = useContext(ShopContext);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (!products.length) return <h2>Loading ...</h2>;

  return (
    <Box>
      <Hero />
      <RichText
      heading="The relaxation tou've been waiting for"
      description="Our BATH BOMBS guarantee a fun, relaxing, and colorful night!"
      />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
      >
        {products.map((product) => (
          <Link to={`/product/${product.handle}`} key={product.id}>
            <Box position="relative">
              <Image
                _hover={{ opacity: "70%" }}
                src={product?.images[0]?.src}
              />
              <VStack position='absolute' bottom='2%' textAlign='center' w='100%' fontWeight='semibold'  >
                <Text fontWeight='bold' textTransform='uppercase'>{product?.title}</Text>
                <Text color='gray.600' >$ {product?.variants[0]?.price.amount}</Text>
              </VStack>
            </Box>
          </Link>
        ))}
      </Grid>

      <RichText heading="Treat Yourself!" />

        <ImageWithDesc 
        imageSrc="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading='Heading 1'
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, est. In ducimus eveniet iste recusandae molestias quaerat minima exercitationem necessitatibus"
         />
        <ImageWithDesc 
        reverseRow={true}
        imageSrc="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
        heading='Heading 2'
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, est. In ducimus eveniet iste recusandae molestias quaerat minima exercitationem necessitatibus"
         />

    </Box>
  );
};

export default Home;
