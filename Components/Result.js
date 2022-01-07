import "../css/Result.css"


const Result = (props) => {
        return(
             props.result &&  <div>
                     <p style={{fontSize: "1.3rem"}}>Ready!</p>
                <p className="result-txt">{props.result}</p>
                </div>
        )
}

export default Result;
