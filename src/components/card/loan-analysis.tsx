import React,{Fragment} from 'react'

type Props = {
  analysis: string[]
}

const LoanAnalysis = ({analysis}: Props) => {
  return (
    <Fragment>
      <h3>Our Analysis</h3>
      <ul className="list-disc list-inside">
        {analysis.map((item) => (
          <li className="text-sm ml-4">{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default LoanAnalysis