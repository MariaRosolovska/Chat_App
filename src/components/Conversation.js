import React from "react";

import CompanionMessage from "./CompanionMessage";
import MyMessage from "./MyMessage";



const Conversation = (props) => {

    const {users, setUsers, personActive} = props,
    history = personActive.chathistory;
    console.log(history);

    return(
        <div className="section_right__chat" >

            {
                
                personActive.username ? ( 

                    history.map((m, i)  => {


                        const{author, time, message} = m;

                        if (author === 'user1') { 
                            
                            return(
                                <CompanionMessage  time={time} message={message} key={i}/>
                            )
                        } else {
                            return(
                                <MyMessage time={time} message={message} key={i}/>
                            )
                        }
                    })
                ) : (
                    <div className="section_right__chat-header">Select Companion, please!</div>
                )        
            }
                    

        </div>
    )

}
export default Conversation;