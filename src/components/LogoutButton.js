import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        
        <button className="section_left__top-symbol" onClick={() => logout({ returnTo: window.location.href })}>
            Log Out
        </button>
    
    );
};

export default LogoutButton;