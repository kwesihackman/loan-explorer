import {nanoid} from 'nanoid'
import { ILoanProduct } from "./Types";

export const sampleLoanProducts: ILoanProduct[] = [
  {
    id: nanoid(),
    bankName: "Absa Bank Ghana Limited",
    loanProductName: "Agri Loan Premium",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 6.5,
    apr: 6.75,
    loanTerm: 60,
    monthlyPayment: 550, // GHS 550
    downPayment: 2000, // GHS 2000
    fees: { originationFee: 60 }, // GHS 60
    loanAmountRange: { min: 6000, max: 60000 }, // GHS 6000 - GHS 60000
    eligibilityRequirements: [
      "Minimum income of GHS 3000 per month",
      "Credit score above 650",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 48 hours",
    customerServiceRating: 4,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  {
    id: nanoid(),
    bankName: "Access Bank Ghana Plc",
    loanProductName: "Farmers Loan Advance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/ABSA_Group_Limited_Logo.svg",
    interestRate: 5.5,
    apr: 6,
    loanTerm: 72,
    monthlyPayment: 600, // GHS 600
    downPayment: 2500, // GHS 2500
    fees: { originationFee: 70 }, // GHS 70
    loanAmountRange: { min: 7000, max: 70000 }, // GHS 7000 - GHS 70000
    eligibilityRequirements: [
      "Minimum income of GHS 3500 per month",
      "Credit score above 700",
    ],
    collateralRequired: ["Land", "Machinery"],
    loanDisbursementTime: "Within 24 hours",
    customerServiceRating: 4.5,
  },
  // ... continue in this pattern until you have 50 sample loan data
];
