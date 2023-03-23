import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import Fonts from "@/components/font";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
