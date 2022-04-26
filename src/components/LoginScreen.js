import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

const LoginScreen = () => {

    return(
        
        <div className="container">
                
            <Profile/>
            <LoginButton/>

        </div>
    )
};

export default LoginScreen;