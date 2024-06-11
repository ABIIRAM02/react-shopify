import { Box, Grid, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="#FFA8E2" color='white' >
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        color="white"
        fontWeight="semibold"
      >
        <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-5_-_trans_1.png?v=1610123549" />
        <VStack p='2rem' >
          <Link to="/">The Green Blast</Link>
          <Link to="/">The Blue Berry</Link>
          <Link to="/">The Yellow Mellow</Link>
        </VStack>
        <VStack p='2rem' >
          <Link to="/">About us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Contact</Link>
        </VStack>
      </Grid>
      <Box>
        <Text w='100%' textAlign='center' borderTop='1px solid white' p='1rem' >abii shopify liquidCode demo.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
