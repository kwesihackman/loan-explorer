import { useRef } from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@components/layout/layout";
import "../styles/globals.css";

function Noop({ children }: React.PropsWithChildren<{}>) {
  return <>{children}</>;
}

 function handleExitComplete() {
   if (typeof window !== "undefined") {
     window.scrollTo({ top: 0 });
   }
 }

export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
 
  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <QueryClientProvider client={queryClientRef.current}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </QueryClientProvider>
    </AnimatePresence>
  );
}
