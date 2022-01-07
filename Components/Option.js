import React, { useState } from "react";
import "../css/Option.css"

const Option = (props) => {

    const [clicked, setClicked] = useState(false)
    const clickHandler = () => {
        setClicked(!clicked);
        props.updateCustomization(props.task, !clicked);
    }

    const renderedCSS = clicked ? "opt-option opt-clicked" : "opt-option"
 

    return ( 
        <React.Fragment>
            <button
            className={renderedCSS}

            onClick={clickHandler}
            >
                {props.cont} 
        
            </button>
        </React.Fragment> 


    )

}


export default Option;
