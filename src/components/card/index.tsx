import { FC } from "react";
import { ILoanProduct } from "src/utils/Types";

interface BankCardProps {
  loanProduct: ILoanProduct;
}

const BankCard: FC<BankCardProps> = ({ loanProduct }) => {
  return (
    <div className="border rounded p-4 m-2 max-w-xs">
      <img
        src={loanProduct.logo}
        alt={loanProduct.bankName + " logo"}
        className="h-20 w-20 mx-auto mb-4"
      />
      <h3 className="text-xl mb-2">{loanProduct.loanProductName}</h3>
      <p className="mb-2">
        <strong>Bank: </strong>
        {loanProduct.bankName}
      </p>
      <p className="mb-2">
        <strong>Interest Rate: </strong>
        {loanProduct.interestRate}%
      </p>
      <p>
        <strong>Loan Amount Range: </strong>
        GHS {" "}
        {loanProduct.loanAmountRange.min} - {loanProduct.loanAmountRange.max}
      </p>
    </div>
  );
};

export default BankCard;
