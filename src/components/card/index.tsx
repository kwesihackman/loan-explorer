import { FC, Fragment } from "react";
import { ILoanProduct } from "src/utils/Types";
import Label from "./label";
import Link from "next/link";
import Image from "next/image";
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import LoanDetails from "./loan-details";

interface BankCardProps {
  loanProduct: ILoanProduct;
  selected: boolean;
  onSelect: (product: ILoanProduct) => void;
  onUnselect: (productId: string) => void;
}

const BankCard: FC<BankCardProps> = ({
  loanProduct,
  selected,
  onSelect,
  onUnselect,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { logo, loanAmountRange, bankName, interestRate, loanProductName } =
    loanProduct;

    const handleButtonClick = () => {
      if (selected) {
        onUnselect(loanProduct.id);
      } else {
        onSelect(loanProduct);
      }
    };
  return (
    <Fragment>
      <div className="border rounded  max-w-xs">
        <div className=" bg-slate-50 min-w-full p-4">
          <img
            src={logo}
            alt={bankName + " logo"}
            className=" h-20 mx-auto mb-4 object-contain"
          />
        </div>
        <div className="p-4 m-2">
          <h3 className="text-xl mb-2 text-white font-semibold">
            {loanProductName}
          </h3>
          <p className="mb-2 text-sm text-white">
            <Label label="Bank" />
            {bankName}
          </p>
          <p className="mb-2 text-sm text-white">
            <Label label="Interest Rate" />
            {interestRate}%
          </p>
          <p className="text-sm text-white">
            <Label label="Loan Amount" />
            GHS {loanAmountRange.min} - {loanAmountRange.max}
          </p>
          <div className="flex flex-row justify-between">
            <p className="pt-4 text-cyan-500  text-right">
              <button
                onClick={handleButtonClick}
                className="text-cyan-500 bg-transparent px-4 py-2  "
              >
                {selected ? "Unselect" : "Compare"}
              </button>
            </p>
            <p className="pt-4 text-cyan-300 underline underline-offset-4 text-right">
              <button
                onClick={onOpen}
                className="text-cyan-300 bg-transparent px-4 py-2 underline "
              >
                See more
              </button>
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            __css={{
              textAlign: "center",
            }}
          >
            {loanProductName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoanDetails loanProduct={loanProduct} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default BankCard;
