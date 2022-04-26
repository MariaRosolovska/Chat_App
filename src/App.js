import React, { useState, useEffect } from 'react';
// import './App.sass';
import './App.css';
import ChatList from './components/ChatList';
import Chat from './components/Chat';
import { useAuth0 } from '@auth0/auth0-react';
import LoginScreen from './components/LoginScreen';





const App = () => {

  const usersF = require('./userData.json');
  
  const appState = JSON.parse( localStorage.getItem('appState'));
  const [users, setUsers] = useState(appState ? appState : usersF);
  console.log(appState);
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const personA = JSON.parse(localStorage.getItem('personA'));
  const [personActive, setPersonActive] = useState(personA ? personA : {});

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(users))
    localStorage.setItem('personA', JSON.stringify(personActive))
  }, [users, personActive])

  return (

    <div className="wrapper">

      {isAuthenticated ? 

        <div className="container"> 
          <ChatList
            users={users}
            setUsers={setUsers}
            personActive={personActive}
            setPersonActive={setPersonActive}
          />

          <Chat
            users={users}
            setUsers={setUsers}
            personActive={personActive}
            setPersonActive={setPersonActive}
          />

        </div> : <LoginScreen/>
      }


    </div>
  );
}

export default App;