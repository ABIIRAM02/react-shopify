import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextForShop from "./utils/context/ContextForShop";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <ContextForShop>
      <App />
    </ContextForShop>
  </ChakraProvider>
);
