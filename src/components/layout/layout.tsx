import React from 'react'
import { NextSeo } from "next-seo";
import Header from '@components/layout/header'
import Footer from '@components/layout/footer'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NextSeo
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
        title="AgriloanAdviser - We advise, You Decide"
        description="Advising on the best options for Agric loan products"
      />
      <Header />
      <main
        className="relative flex-grow min-h-screen"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout