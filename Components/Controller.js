import React, { useState } from "react";
import Fetch from "./Fetch.js";
import Option from "./Option.js"
import Length from "./Length.js";

import "../css/Controller.css"


const Controller = () => {

    const [customization, setCustomization] = useState({

        isUpperCased: false,
        isNumbered: false,
        isSpecialCharactered: false,
        pwLength: 0


    });


    const updateLength = (value) => {
        updateCustomization("pwLength", value);
    }


    const updateCustomization = ( (task, value) => {

        setCustomization( (state) => {
            const copy = {...state};
            copy[task] = value;

            return copy;
        }  )

        


    } )


    return(

        <React.Fragment>
   
        <div className="mainwrapper">

        <div className="options"> 
        <Option task="isUpperCased" cont="+uppercase" updateCustomization={updateCustomization} />
        <Option task="isNumbered" cont="+number" updateCustomization={updateCustomization}/>
        <Option task="isSpecialCharactered" cont="+special character" updateCustomization={updateCustomization} />
        </div> 
      
        <Length updateLength={updateLength}/>
     
        <Fetch customizationInfo={customization}/>
        </div>
        </React.Fragment>
        
    )


}

export default Controller;
