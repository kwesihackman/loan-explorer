import { Heading } from "@chakra-ui/react";
import Hero from "@components/hero";
import { Fragment } from "react";


export default function Page() {
  return (
    <Fragment>
      <Hero
        title="Welcome to AgriLoan Explorer"
        subtitle="Find and compare the best agri-loan products"
        ctaText="Get Started"
      />
    </Fragment>
  );
}
