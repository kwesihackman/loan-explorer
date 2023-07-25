import BankCard from "@components/card";
import { FC } from "react";
import { ILoanProduct } from "src/utils/Types";

interface ProductListProps {
  loanProducts: ILoanProduct[];
}

const ProductList: FC<ProductListProps> = ({ loanProducts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 gap-y-8">
      {loanProducts.map((loanProduct) => (
        <BankCard key={loanProduct.id} loanProduct={loanProduct} />
      ))}
    </div>
  );
};

export default ProductList;
