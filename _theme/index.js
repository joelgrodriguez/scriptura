import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.200",
        color: "gray.800",
        fontFamily: "monospace",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
