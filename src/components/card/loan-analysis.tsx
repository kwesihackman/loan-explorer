import React,{Fragment} from 'react'
import { getAnalysisFromCompareLoans } from 'src/utils/Functions';
import { ILoanProduct } from 'src/utils/Types';

type Props = {
  loanProductOne: ILoanProduct;
  loanProductTwo: ILoanProduct;
};

const LoanAnalysis = ({loanProductOne, loanProductTwo}: Props) => {
  const analysis = getAnalysisFromCompareLoans(loanProductOne, loanProductTwo);
  return (
    <Fragment>
      <h3 className=" text-xl text-slate-700 font-semibold mb-2">Our Analysis</h3>
      <ul className="list-disc list-inside my-4">
        {analysis.map((item) => (
          <li className="text-sm ml-4">{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default LoanAnalysis