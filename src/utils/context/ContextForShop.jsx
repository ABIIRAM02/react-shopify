import React, { useEffect, useState } from "react";
import { createContext } from "react";
import Client from "shopify-buy";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

export const ShopContext = createContext();

const ContextForShop = ({ children }) => {
  const [data, setData] = useState({
    loading: false,
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  });

  const createCheckOut = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    setData((prevData) => ({ ...prevData, checkout: checkout }));
  };

  const fetchCheckOut = async (checkoutId) => {
    const checkoutData = await client.checkout.fetch(checkoutId);
    setData((prevData) => ({ ...prevData, checkout: checkoutData }));
  };

  const handleCheckout = () => {
    const checkoutId = localStorage.checkout_id;
    checkoutId ? fetchCheckOut(checkoutId) : createCheckOut();
  };

  const addItemToCheckout = async (variantId, quantity) => {
    const itemData = [
      {
        variantId,
        quantity: parseInt(quantity),
      },
    ];

    const checkout = await client.checkout.addLineItems( data.checkout.id , itemData )
    setData((prevData) => ({ ...prevData, checkout , isCartOpen : true }));
  };

  const removeItem = async (itemId) => {
    const checkout = await client.checkout.removeLineItems( data.checkout.id , itemId )
    setData((prevData) => ({ ...prevData, checkout }));
  };

  const fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    setData((prevData) => ({ ...prevData, products }));
  };

  const fetchProductById = async (id) => {
    const product = await client.product.fetchByHandle(id);
    setData({ ...data, product });
  };

  const handleCartPresence = () => {
    setData({ ...data, isCartOpen: !data.isCartOpen });
  };
  const handleMenuPresence = () => {
    setData({ ...data, isMenuOpen: !data.isMenuOpen });
  };

  useEffect(() => {
    handleCheckout();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        ...data,
        fetchAllProducts,
        fetchProductById,
        addItemToCheckout,
        removeItem,
        handleCartPresence,
        handleMenuPresence
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ContextForShop;
