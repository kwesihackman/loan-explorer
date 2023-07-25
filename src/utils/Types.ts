export interface ILoanProduct {
  id:string
  bankName: string;
  logo: string;
  loanProductName: string;
  interestRate: number;
  apr: number; 
  loanTerm: number;
  monthlyPayment: number;
  downPayment: number; 
  fees: {
    originationFee?: number;
    prepaymentPenalty?: number; 
    lateFee?: number; 
  };
  loanAmountRange: {
    min: number;
    max: number;
  };
  eligibilityRequirements: string[];
  collateralRequired: string[];
  loanDisbursementTime: string; 
  customerServiceRating: number; 
  contact:string;
  location:string
}

