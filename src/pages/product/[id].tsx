import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { ILoanProduct } from 'src/utils/Types';
import { sampleLoanProducts } from 'src/utils/Data';

interface LoanDetailsProps {
  loanProduct: ILoanProduct;
}

const LoanDetails: FC<LoanDetailsProps> = ({ loanProduct }) => {
  // Detail page content goes here
  if(!loanProduct){
    return <div>Loan product not found</div>
  }
  return (
    <div>
      <h1>{loanProduct.loanProductName}</h1>
      {/* Display other details of the loan product */}
    </div>
  );
};

// This function runs at request time and provides props to the page
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch loan product data here based on the id from the context
  // In this example, I'll use a placeholder
  const id = context.params?.id;
  const loanProduct: ILoanProduct | undefined = sampleLoanProducts.find(p => p.id === id);// fetch or find the loan product using the id

  return {
    props: {
      loanProduct
    },
  };
};

export default LoanDetails;
