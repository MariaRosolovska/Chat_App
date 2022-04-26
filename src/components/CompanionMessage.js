import React from "react";


const CompanionMessage = (props) => {

    const {time, message} = props;


    return(
        

        <div className="message you">
            {message}
            <span className="conversation-start"> {time} </span>
        </div>

    )

}
export default CompanionMessage;