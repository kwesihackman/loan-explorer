import { Heading } from "@chakra-ui/react";
import Hero from "@components/hero";
import ProductList from "@components/products";
import SearchBox from "@components/search";
import { Fragment, useState } from "react";
import { useLoanProductsQuery } from "src/hooks/useFetchProducts";
import { sampleLoanProducts } from "src/utils/Data";


export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
 const {data, isLoading, error} = useLoanProductsQuery()
 if(isLoading) {
    return <div>Loading...</div>
 }

 if(error) {
    return <div>{`Error Loading loan products`}</div>
 }

 const handleSearch = (term: string) => {
   setSearchTerm(term);
 };

  return (
    <div className="bg-sky-950">
      <Hero
        title="Welcome to AgriLoan Explorer"
        subtitle="Find and compare the best agri-loan products"
      />
      <SearchBox onSearch={handleSearch} />
      <div className="container bg- mx-auto mt-20 pb-10">
        <ProductList loanProducts={data!} searchTerm={searchTerm}  />
      </div>
    </div>
  );
}
