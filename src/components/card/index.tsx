import { FC } from "react";
import { ILoanProduct } from "src/utils/Types";
import Label from "./label";
import Link from "next/link";
import Image from "next/image";

interface BankCardProps {
  loanProduct: ILoanProduct;
}

const BankCard: FC<BankCardProps> = ({ loanProduct }) => {
  const {logo, loanAmountRange, bankName, interestRate, id, loanProductName} = loanProduct
  return (
    <div className="border rounded  max-w-xs">
      <div className=" bg-slate-200 min-w-full p-4">
        <img
          src={logo}
          alt={bankName + " logo"}
          className="  h-20 w-20 mx-auto mb-4 object-cover"
        />
      </div>
      <div className="p-4 m-2">
        <h3 className="text-xl mb-2">{loanProductName}</h3>
        <p className="mb-2 text-sm">
          <Label label="Bank" />
          {bankName}
        </p>
        <p className="mb-2 text-sm">
          <Label label="Interest Rate" />
          {interestRate}%
        </p>
        <p className="text-sm">
          <Label label="Loan Amount" />
          GHS {loanAmountRange.min} - {loanAmountRange.max}
        </p>
        <p className="pt-4 text-cyan-300 underline underline-offset-4 text-right">
          <Link href={`product/${id}`}>See more details</Link>
        </p>
      </div>
    </div>
  );
};

export default BankCard;
