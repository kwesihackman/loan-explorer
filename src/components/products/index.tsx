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

interface ProductListProps {
  loanProducts: ILoanProduct[];
}

const ProductList: FC<ProductListProps> = ({ loanProducts }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
   const [selectedProducts, setSelectedProducts] = useState<ILoanProduct[]>([]);

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
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 gap-y-8">
        {loanProducts.map((loanProduct) => (
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductList;
