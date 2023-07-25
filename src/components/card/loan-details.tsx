import React from 'react'
import { ILoanProduct } from 'src/utils/Types';
import Label from './label';

type Props = {
  loanProduct: ILoanProduct;
};

const LoanDetails = ({ loanProduct }: Props) => {
  const {
    logo,
    loanAmountRange,
    bankName,
    interestRate,
    loanTerm,
    downPayment,
    fees,
    eligibilityRequirements,
    collateralRequired,
    loanDisbursementTime,
    monthlyPayment,
  } = loanProduct;
  return (
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
          <Label label="Monthly payment" />
          {`GHS ${monthlyPayment}`}
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
          <h4 className=" font-semibold text-slate-400">Requirements</h4>
          <ul className="list-disc">
            {eligibilityRequirements.map((item) => (
              <li className="text-sm ml-4">{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className=" font-semibold text-slate-400">Collateral Options</h4>
          <ul className="list-disc">
            {collateralRequired.map((item) => (
              <li className="text-sm ml-4">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails