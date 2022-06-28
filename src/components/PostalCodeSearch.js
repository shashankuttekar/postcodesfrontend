import AsyncSelect from "react-select/async";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";
import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import { postcodes_base_url } from "../AppConfig";

//This is postal code search component. 
//It uses debounce to delay api call so that user can complete his typing and get back result.
export default function PostalCodeSearch(props){
  const minLengthAutocomplete = 1;
  
  const [noData, setnoData] = useState(false);
  const fetchSuggestions = useDebouncedCallback(
    (value, cb) => {
    if (value.length < minLengthAutocomplete) {
      return cb([]);
    }
    const url = `${postcodes_base_url}/api/postcodes/${value}/autocomplete`;
    axios(url).then((response) => {
      if (response.data?.result?.length) {
        setnoData(false);
        let postCodes = response.data.result.map((x) => {
          return {
            label: x,
            value: x
          };
        });
        return cb(postCodes || []);
      } else {
        setnoData(true);
      }
      return cb([]);
    });
  }, 
  300);

  const handleSelectSuggest = (e) => {
    props.handlePostCodeSelection(e.value);
  }

  return (
      <div style={{width:"300px"}}>
         { noData && <Alert key={"warning"} variant={"warning"}>
            No data found!
          </Alert> }
        <AsyncSelect
            loadOptions={fetchSuggestions} 
            onChange={handleSelectSuggest}
            placeholder={'Please type post code here'}
            
          />
      </div>
  )

}