import React from "react";

import SectionTop from "./SectionTop";
import Conversation from "./Conversation";
import WriteText from "./WriteText"

const Chat = (props) => {

    const {users, setUsers, personActive, setPersonActive} = props;

    return(
        <div className="section_right">
              
            <SectionTop person={personActive}/>
        

            <Conversation users={users}  personActive={personActive}/>
            

            <WriteText users={users} setUsers={setUsers} personActive={personActive}/>

                
              
        </div>
    )

}

export default Chat;