import React from 'react'
import { ILoanProduct } from 'src/utils/Types';
import Label from './label';

type Props = {
  loanProduct: ILoanProduct;
  showProductName?:boolean;
};

const LoanDetails = ({ loanProduct, showProductName=false }: Props) => {
  const {
    logo,
    loanAmountRange,
    bankName,
    loanProductName,
    interestRate,
    loanTerm,
    downPayment,
    fees,
    eligibilityRequirements,
    collateralRequired,
    loanDisbursementTime,
    monthlyPayment,
    apr,
    contact,
    location
    
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
      <div>
        <h4 className="text-lg mb-2 text-slate-700 font-semibold text-center">
          {contact}
        </h4>
        <h4 className="text-lg mb-2 text-slate-700 font-semibold text-center">
          {location}
        </h4>
      </div>
      <div className="p-4 m-2">
        <p className="mb-2 text-sm ">
          <Label label="Bank" />
          {bankName}
        </p>
        {showProductName && (
          <p className="mb-2 text-sm ">
            <Label label="Product name" />
            {loanProductName}
          </p>
        )}

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

        <div className=" flex flex-row space-x-7 ">
          <p className="mb-2 text-sm ">
            <Label label="Interest Rate" />
            {interestRate}%
          </p>
          <p className="mb-2 text-sm ">
            <Label label="APR" />
            {apr}%
          </p>
        </div>
        <div className=" flex flex-row space-x-7 ">
          <p className="mb-2 text-sm ">
            <Label label="Fees" />
            {`GHS ${fees.originationFee}`}
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
            {eligibilityRequirements.map((item, index) => (
              <li key={index} className="text-sm ml-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className=" font-semibold text-slate-400">Collateral Options</h4>
          <ul className="list-disc">
            {collateralRequired.map((item, index) => (
              <li key={index} className="text-sm ml-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails