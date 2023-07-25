import React,{FC} from 'react'
import { ILoanProduct } from 'src/utils/Types';
import LoanDetails from './loan-details';

interface CompareProductsProps {
  loanProductLeft: ILoanProduct;
  loanProductRight: ILoanProduct;
}

const CompareProducts: FC<CompareProductsProps> = ({
  loanProductLeft,
  loanProductRight,
}) => {
  return (
    <div className="flex justify-around p-4">
      <div className="w-1/2 p-2 border rounded">
        <LoanDetails loanProduct={loanProductLeft} />
      </div>

      <div className="w-1/2 p-2 border rounded">
        <LoanDetails loanProduct={loanProductRight} />
      </div>
    </div>
  );
};

export default CompareProducts