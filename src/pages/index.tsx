import { Heading } from "@chakra-ui/react";
import Hero from "@components/hero";
import ProductList from "@components/products";
import SearchBox from "@components/search";
import { Fragment } from "react";
import { useLoanProductsQuery } from "src/hooks/useFetchProducts";
import { sampleLoanProducts } from "src/utils/Data";


export default function Page() {
 const {data, isLoading, error} = useLoanProductsQuery()
 if(isLoading) {
    return <div>Loading...</div>
 }

 if(error) {
    return <div>{`Error Loading loan products`}</div>
 }

 console.log({data})

  return (
    <div className="bg-sky-950">
      <Hero
        title="Welcome to AgriLoan Explorer"
        subtitle="Find and compare the best agri-loan products"
        ctaText="Get Started"
      />
      <SearchBox />
      <div className="container bg- mx-auto mt-8 pb-10">
        <ProductList loanProducts={data!} />
      </div>
    </div>
  );
}
