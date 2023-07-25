import { ILoanProduct } from "./Types";

export function getAnalysisFromCompareLoans(
  loan1: ILoanProduct,
  loan2: ILoanProduct
): string[] {
  let adviceArray: string[] = [];

  if (loan1.apr < loan2.apr) {
    adviceArray.push(
      `${loan1.bankName}'s ${loan1.loanProductName} has a lower APR (Annual Percentage Rate).`
    );
  } else if (loan1.apr > loan2.apr) {
    adviceArray.push(
      `${loan2.bankName}'s ${loan2.loanProductName} has a lower APR (Annual Percentage Rate).`
    );
  } else {
    adviceArray.push(
      `Both ${loan1.bankName}'s ${loan1.loanProductName} and ${loan2.bankName}'s ${loan2.loanProductName} have the same APR.`
    );
  }

  if (loan1.downPayment < loan2.downPayment) {
    adviceArray.push(
      `${loan1.bankName}'s ${loan1.loanProductName} has a lower down payment.`
    );
  } else if (loan1.downPayment > loan2.downPayment) {
    adviceArray.push(
      `${loan2.bankName}'s ${loan2.loanProductName} has a lower down payment.`
    );
  } else {
    adviceArray.push(
      `Both ${loan1.bankName}'s ${loan1.loanProductName} and ${loan2.bankName}'s ${loan2.loanProductName} have the same down payment.`
    );
  }

  if (loan1.loanTerm < loan2.loanTerm) {
    adviceArray.push(
      `${loan1.bankName}'s ${loan1.loanProductName} has a shorter repayment period.`
    );
  } else if (loan1.loanTerm > loan2.loanTerm) {
    adviceArray.push(
      `${loan2.bankName}'s ${loan2.loanProductName} has a shorter repayment period.`
    );
  } else {
    adviceArray.push(
      `Both ${loan1.bankName}'s ${loan1.loanProductName} and ${loan2.bankName}'s ${loan2.loanProductName} have the same repayment period.`
    );
  }

  if (loan1.monthlyPayment < loan2.monthlyPayment) {
    adviceArray.push(
      `${loan1.bankName}'s ${loan1.loanProductName} has a lower monthly payment.`
    );
  } else if (loan1.monthlyPayment > loan2.monthlyPayment) {
    adviceArray.push(
      `${loan2.bankName}'s ${loan2.loanProductName} has a lower monthly payment.`
    );
  } else {
    adviceArray.push(
      `Both ${loan1.bankName}'s ${loan1.loanProductName} and ${loan2.bankName}'s ${loan2.loanProductName} have the same monthly payment.`
    );
  }

  if (loan1.fees.originationFee! > loan2.fees.originationFee!) {
    adviceArray.push(
      `${loan1.bankName}'s ${loan1.loanProductName} has a higher loan process fess.`
    );
  } else if (loan1.fees.originationFee! < loan2.fees.originationFee!) {
    adviceArray.push(
      `${loan2.bankName}'s ${loan2.loanProductName} has a lower loan process fess.`
    );
  } else {
    adviceArray.push(
      `Both ${loan1.bankName}'s ${loan1.loanProductName} and ${loan2.bankName}'s ${loan2.loanProductName} have the same loan process fees.`
    );
  }

  return adviceArray;
}
