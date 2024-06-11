import React, { useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { ShopContext } from "../utils/context/ContextForShop";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { isCartOpen, handleCartPresence, checkout, removeItem } =
    useContext(ShopContext);

  return (
    <Drawer isOpen={isCartOpen} placement="right" onClose={handleCartPresence}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Shopping Cart</DrawerHeader>

        <DrawerBody>
          {checkout.lineItems?.length ? (
            checkout.lineItems.map((item) => (
              <Grid
                templateColumns="1fr 2fr 1fr 1fr"
                justifyItems="center"
                alignItems="center"
                key={item.id}
              >
                <Image rounded={2} src={item?.variant.image.src} />
                <Text flex={1}>{item.title}</Text>
                <Text>{item.variant.price.amount}</Text>
                <MdDeleteOutline
                  cursor="pointer"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                />
              </Grid>
            ))
          ) : (
            <Text my='2rem' textAlign='center'>Empty Cart</Text>
          )}
        </DrawerBody>

        <DrawerFooter>
           {checkout.lineItems?.length ?
          <Button w="100%">
            <Link href={checkout.webUrl}>Checkout</Link>
          </Button> : null
           } 
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
