import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AppProvider from "../component/template/appProvider";
import { Fonts } from "../component/Font";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    fonts: {
      heading: "Source Sans Pro",
      body: "Source Sans Pro",
    },
  });

  return (
    <>
      <ChakraProvider>
        <AppProvider>
          <Component {...pageProps} />{" "}
        </AppProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
