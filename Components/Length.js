import React, { useState } from "react";
import "../css/Length.css"

const Length = (props) => {

const [valid, setValid] = useState(true)


const lengthHandler = (event) => {

if(Number(event.target.value) < 4 || Number(event.target.value > 25)){
    setValid(false)
    props.updateLength(0)

} else{
    setValid(true)
    props.updateLength(event.target.value);
}
}

const validationMessage = valid ? "" : <p style={{color: "#000", fontSize: "1.6rem"}}>Choose a length between 3 and 25!</p>

const numberInputCSS = valid ? "numberInput" : "numberInput invalid";

    return( 

        <React.Fragment>
       <div id="lengthArea">
        <label className="lengthInput">Password Length: </label>
        <input className={numberInputCSS} id="pwlength" type="number" min="4" max="40" onChange={lengthHandler} />
        {validationMessage}
        </div>
        </React.Fragment>
    )

}


export default Length;
