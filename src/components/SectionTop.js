import React from "react";

const SectionTop = (props) => {

    const {person} = props;

    return(
              
        <div className="section_right__top">
            <span>To: <span className="section_right__top-name">
                {person.username}
                </span></span>
        </div>
        
    )

}

export default SectionTop;