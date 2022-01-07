import React, { useState } from "react";
import Result from "./Result";

import "../css/Fetch.css"

const Fetch = (props) => {

    let baseURL = "https://passwordinator.herokuapp.com/generate?";

    const {isUpperCased, isSpecialCharactered, isNumbered, pwLength} = props.customizationInfo;

    const [result, setResult] = useState("");
    const [loading, setLoading] = useState("");

    if(isUpperCased){baseURL = baseURL.concat("&caps=true")}
    if(isSpecialCharactered){baseURL = baseURL.concat("&char=true")}
    if(isNumbered){baseURL = baseURL.concat("&num=true")}
    baseURL = baseURL.concat(`&len=${pwLength}`)

    async function generatePassword(){

        if(pwLength > 3){
        
        setLoading(true)
        const data = await fetch(baseURL);
        const json = await data.json();
        setResult(json.data);
        
        }

        setLoading(false)
    }

    const renderOutput = loading ? <p>Generating...</p> :  <Result result={result} />

    return(

        <React.Fragment>
        <button className="fetch-btn" onClick={generatePassword}>Generate Password!</button>
        {renderOutput}
        </React.Fragment>


    )

}


export default Fetch;
