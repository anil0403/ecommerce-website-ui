import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
