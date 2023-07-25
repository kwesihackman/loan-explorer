import BankCard from "@components/card";
import { FC, useState } from "react";
import { ILoanProduct } from "src/utils/Types";
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import CompareProducts from "@components/card/compare-products";
import LoanAnalysis from "@components/card/loan-analysis";

interface ProductListProps {
  loanProducts: ILoanProduct[];
  searchTerm:string;
}

const ProductList: FC<ProductListProps> = ({ loanProducts, searchTerm }) => {
   const [selectedProducts, setSelectedProducts] = useState<ILoanProduct[]>([]);
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
   const handleSelectProduct = (product: ILoanProduct) => {
     if (selectedProducts.length < 2) {
       setSelectedProducts([...selectedProducts, product]);
     } else {
       alert(
         "You can compare only two products at a time. Unselect a product before selecting another one."
       );
     }
   };

   const handleUnselectProduct = (productId: string) => {
     setSelectedProducts(
       selectedProducts.filter((product) => product.id !== productId)
     );
   };

   const filteredProducts = loanProducts.filter(
     (product) =>
       product.loanProductName.toLowerCase().includes(lowerCaseSearchTerm) ||
       product.bankName.toLowerCase().includes(lowerCaseSearchTerm)
   );

  return (
    <div>
      <p className="text-slate-300 text-xl mb-4">
        Select Two products to compare
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 gap-y-8">
        {filteredProducts.map((loanProduct) => (
          <BankCard
            key={loanProduct.id}
            loanProduct={loanProduct}
            selected={selectedProducts.includes(loanProduct)}
            onSelect={handleSelectProduct}
            onUnselect={handleUnselectProduct}
          />
        ))}
      </div>
      <Modal
        isOpen={selectedProducts.length === 2}
        onClose={() => setSelectedProducts([])}
      >
        <ModalOverlay />
        <ModalContent minW="960px">
          <ModalHeader
            __css={{
              textAlign: "center",
            }}
          >
            Compare Loan Products
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CompareProducts
              loanProductLeft={selectedProducts[0]}
              loanProductRight={selectedProducts[1]}
            />
            <LoanAnalysis
              loanProductOne={selectedProducts[0]}
              loanProductTwo={selectedProducts[1]}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductList;
