import React, { useState } from "react";

const WriteText = (props) => {

    const { users, setUsers, personActive } = props;

    const [messageText, setMessageText] = useState('');

    const voice = () => {
        let voice = new Audio();
        voice.src = 'https://zvukogram.com/mp3/cats/880/iphone.mp3';
        voice.autoplay = true;
    }

    const sortUsers = (usr) => {
        setUsers(
            usr.sort((a, b) => a.sortT - b.sortT).reverse()

        )
    }


    const userAnswer = async (name) => {

        let updateUsers = [],
            date = new Date(),
            sortT = date.getTime(),
            chuckRes,
            mTime = date.toLocaleTimeString() + ' ' + date.toLocaleDateString();

        await fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(json => chuckRes = json.value);

        users.map(user => {

            if (name === user.username) {

                user.sortT = sortT;

                if (user.username !== JSON.parse(localStorage.getItem('personA')).username) {
                    user.unread = true;
                }

                // console.log(name, personActive.username);

                user.chathistory.push(
                    {
                        "author": "user1",
                        "time": mTime,
                        "message": chuckRes
                    }

                )

                // console.log(user.username);
                updateUsers.push(user);
            } else {

                updateUsers.push(user);
            }

        })

        voice();
        // console.log(updateUsers[0].chathistory);
        sortUsers(updateUsers);

    }

    const heandleSubmit = (e) => {
        e.preventDefault()

        let updateUsers = [],
            date = new Date(),
            sortT = date.getTime(),
            mTime = date.toLocaleTimeString() + ' ' + date.toLocaleDateString();


        if (personActive.username) {
            users.map(user => {

                if (user.username === personActive.username) {

                    user.sortT = sortT;

                    user.chathistory.push(
                        {
                            "author": "user2",
                            "time": mTime,
                            "message": messageText
                        }

                    )

                    updateUsers.push(user);

                    setTimeout(() => {

                        userAnswer(personActive.username)

                    }, 4000);
                } else {

                    updateUsers.push(user);
                }

            })

            sortUsers(updateUsers);
            setMessageText('');

        }

    }



    return (

        <div className="section_right__write">


            {
                personActive.username &&

                <form onSubmit={(e) => heandleSubmit(e)}>

                    <input className="section_right__write-text" type="text" onChange={(e) => setMessageText(e.target.value)} value={messageText} />

                    <input type="submit" className="section_right__write-link" value='' />

                </form>
            }

        </div>


    )

}

export default WriteText;