import axios from 'axios';
// const base_url = `${process.env.REACT_APP_API_ENDPOINT}`;
import { postcodes_base_url } from "../AppConfig";

async function getPostCodesDetails(postCode) {
  const response = await axios.get(`${postcodes_base_url}/api/postcodes/${postCode}`);
  
  const result = response.data;
  console.log("resoib", response);
  return result;
};

export const apis = {
  getPostCodesDetails
}
