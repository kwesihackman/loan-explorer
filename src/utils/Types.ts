export interface ILoanProduct {
  bankName: string;
  logo: string;
  loanProductName: string;
  interestRate: number; // in percentage
  apr: number; // in percentage
  loanTerm: number; // in months
  monthlyPayment: number; // in local currency
  downPayment: number; // in local currency
  fees: {
    originationFee?: number; // in local currency
    prepaymentPenalty?: number; // in local currency
    lateFee?: number; // in local currency
  };
  loanAmountRange: {
    min: number;
    max: number;
  };
  eligibilityRequirements: string[];
  collateralRequired: string[];
  loanDisbursementTime: string; // could be immediate, within 24 hours, etc.
  customerServiceRating: number; // scale of 1 to 5
}

