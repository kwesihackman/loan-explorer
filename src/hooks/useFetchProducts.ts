import { useQuery, UseQueryResult } from "react-query";
import axios from "axios"
import { API_ENDPOINTS } from "src/utils/api-endpoints";
import { ILoanProduct } from "src/utils/Types";


  const fetchLoanProducts = async () => {
  const {
    data,
  } = await axios.get(API_ENDPOINTS.PRODUCTS); 
  return data.data
}

export const useLoanProductsQuery = (): UseQueryResult<ILoanProduct[], Error> => {
  return useQuery("products", fetchLoanProducts);
};


