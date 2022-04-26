import React from "react";
import Person from "./Person";
import { useState } from "react";
import LogoutButton from "./LogoutButton";

const ChatList = (props) => {

    const { users, setUsers, personActive, setPersonActive } = props;

    const [search, setSearch] = useState("")
    console.log(search);
    console.log(users);

    const filterUser = (e) => {

        setSearch(e.target.value.toUpperCase())

        setUsers([...users].sort(elem => elem.username.toUpperCase().search(search)).reverse())
    }

    return (
        <div className="section_left">


            <div className="section_left__top">
                <input
                    type="text"
                    onChange={(e) => filterUser(e)}
                    placeholder="Search"
                    value={search}
                />
                

                <LogoutButton />
                
            </div>

            <ul className="section_left__people">
                {
                    users.map(person => {

                        return (

                            <Person
                                key={person.username}
                                setPersonActive={setPersonActive}
                                personActive={personActive}
                                person={person}
                                users={users}
                                setUsers={setUsers}
                            />

                        )

                    })
                }


            </ul>
        </div>
    )

}
export default ChatList;
