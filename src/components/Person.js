import React from "react";

const Person = (props) =>{

    const {setPersonActive, personActive, person, setUsers, users} = props,
        {username, picture, chathistory, unread} = person,
        time=chathistory[chathistory.length-1].time,
        message=chathistory[chathistory.length-1].message;

    const heandleUser = () => {
        
        setUsers(
            [...users].map(user => {
                
                if (user.username === username){
                    
                    user.unread = false;
                } 
                return user
            })
        )

        setPersonActive(person)
        localStorage.setItem('personA', JSON.stringify(person))

        console.log(person);
    }

    return(

        <li className="section_left__people-person" onClick={heandleUser}>
            <img src={picture} alt="photo" />
            <span className="name"> {username} </span>
            <span className="time"> {time}</span>
            <span className="preview">{message}</span>
            {
                unread && <span className="flag"></span>
            }

        </li>

    )

}
export default Person;