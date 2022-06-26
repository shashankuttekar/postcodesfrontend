import React, { useState } from "react";
import PostalCodeSearch from "./components/PostalCodeSearch";
import PostalDetails from "./components/PostalDetails";
import { apis } from './services/Api';

function App() {
  const [postalData, setpostalData] = useState();
  const handlePostCodeSelection = async (postCode) => {
    let  data = await apis.getPostCodesDetails(postCode);
    setpostalData(data);
  }
    return (
        <React.Fragment>
            <div className="container-fluid p-5 bg-info text-black text-center">
                <h1>
                   Postal Code Search
                </h1>
                
            </div>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col">
                       <PostalCodeSearch handlePostCodeSelection={handlePostCodeSelection} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                       <PostalDetails postalData={postalData} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
