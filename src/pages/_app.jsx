import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import theme from "@/styles/theme";
import Fonts from "@/components/font";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
