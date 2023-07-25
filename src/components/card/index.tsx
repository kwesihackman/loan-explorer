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

interface BankCardProps {
  loanProduct: ILoanProduct;
}

const BankCard: FC<BankCardProps> = ({ loanProduct }) => {
  const {isOpen, onClose, onOpen} = useDisclosure()
  const {
    logo,
    loanAmountRange,
    bankName,
    interestRate,
    loanTerm,
    loanProductName,
    downPayment,
    fees,
    eligibilityRequirements,
    collateralRequired,
    loanDisbursementTime,
    monthlyPayment
  } = loanProduct;
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
          <h3 className="text-xl mb-2 text-white font-semibold">{loanProductName}</h3>
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
          <p className="pt-4 text-cyan-300 underline underline-offset-4 text-right">
            <button
              onClick={onOpen}
              className="text-cyan-300 bg-transparent px-4 py-2 underline "
            >
              See more details
            </button>
          </p>
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
            <div className="">
              <div className=" bg-slate-50 min-w-full p-4">
                <img
                  src={logo}
                  alt={bankName + " logo"}
                  className="  h-20 mx-auto mb-4 object-fill"
                />
              </div>
              <div className="p-4 m-2">
                <p className="mb-2 text-sm ">
                  <Label label="Bank" />
                  {bankName}
                </p>

                <p className="text-sm mb-2">
                  <Label label="Loan Amount" />
                  GHS {loanAmountRange.min} - {loanAmountRange.max}
                </p>
                <p className="mb-2 text-sm ">
                  <Label label="Down Payment" />
                  {`GHS ${downPayment}`}
                </p>
                <p className="mb-2 text-sm ">
                  <Label label="Fees" />
                  {`GHS ${fees.originationFee}`}
                </p>
                <div className=" flex flex-row space-x-7 ">
                  <p className="mb-2 text-sm ">
                    <Label label="Interest Rate" />
                    {interestRate}%
                  </p>
                  <p className="mb-2 text-sm ">
                    <Label label="Loan Term" />
                    {loanTerm} months
                  </p>
                </div>
                <p className="mb-2 text-sm ">
                  <Label label="Disbursement Period" />
                  {loanDisbursementTime}
                </p>
                <div className="mt-4">
                  <h4 className=" font-semibold text-slate-400">
                    Requirements
                  </h4>
                  <ul className="list-disc">
                    {eligibilityRequirements.map((item) => (
                      <li className="text-sm ml-4">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className=" font-semibold text-slate-400">
                    Collateral Options
                  </h4>
                  <ul className="list-disc">
                    {collateralRequired.map((item) => (
                      <li className="text-sm ml-4">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default BankCard;
