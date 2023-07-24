import { FC } from "react";
import { ILoanProduct } from "src/utils/Types";
import Label from "./label";

interface BankCardProps {
  loanProduct: ILoanProduct;
}

const BankCard: FC<BankCardProps> = ({ loanProduct }) => {
  return (
    <div className="border rounded  max-w-xs">
      <div className=" bg-slate-200 min-w-full p-4">
        <img
          src={loanProduct.logo}
          alt={loanProduct.bankName + " logo"}
          className="  h-20 w-20 mx-auto mb-4 object-cover"
        />
      </div>
      <div className="p-4 m-2">
        <h3 className="text-xl mb-2">{loanProduct.loanProductName}</h3>
        <p className="mb-2 text-sm">
          <Label label="Bank" />
          {loanProduct.bankName}
        </p>
        <p className="mb-2 text-sm">
          <Label label="Interest Rate" />
          {loanProduct.interestRate}%
        </p>
        <p className="text-sm">
          <Label label="Loan Amount" />
         GHS {loanProduct.loanAmountRange.min} -{" "}
          {loanProduct.loanAmountRange.max}
        </p>
      </div>
    </div>
  );
};

export default BankCard;
