// import App from 'next/app'
import custom from '../_theme/index'

import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={custom}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
