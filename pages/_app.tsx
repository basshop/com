// This file is used to initialize pages. You can override it and control the page initialization.
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
