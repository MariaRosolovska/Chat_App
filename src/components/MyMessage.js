import React from "react";


const MyMessage = (props) => {

    const {time, message} = props;

    return(
        
        
        <div className="message me">
            {message}
            <span className="conversation-start"> {time} </span>
        </div>

        
    )

}
export default MyMessage;