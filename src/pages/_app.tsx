import type { AppProps } from "next/app";
import { NextUIProvider, useSSR } from "@nextui-org/react";
import "@/styles/globals.css";
import { darkTheme } from "@/themes";

export default function App({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  );
}
