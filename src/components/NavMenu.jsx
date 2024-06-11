import React, { useContext } from "react";
import { ShopContext } from "../utils/context/ContextForShop";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack,
} from "@chakra-ui/react";

const NavMenu = () => {
  const { isMenuOpen, handleMenuPresence } = useContext(ShopContext);

  return (
    <Drawer
      isOpen={isMenuOpen}
      onClose={handleMenuPresence}
      placement="left"
      size="sm"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                <VStack>
                    <Link to="/">About us</Link>
                    <Link to="/">Learn More</Link>
                    <Link to="/">Contact</Link>
                </VStack>
                </DrawerBody>
            <DrawerFooter textAlign="center">
          <Text w='100%' >All rights recived</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavMenu;
