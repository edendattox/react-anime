import React from 'react'
import "./Header.css";

function Header() {
    return (
        <div className="header">
           <div className="header__left">
            <img className="logo" src="https://4anime.co/static/logo.png" alt="logo" />
           
            <span >Browse</span>
            <span >Random</span>
            <span >Genre</span>
          </div>

            <div className="header__right">
              <input
                type="text"
                placeholder="Search..." 
                style={{backgroundColor: "#161616", padding: "15px", border: "1px solid #b6b6b6", width: "400px", borderRadius: ".5em", color: "#b6b6b6" }}
                />
                <span ><i className="fab fa-discord" id="icon" style={{fontSize: "30px", color: "#b6b6b6"}} ></i></span>
                <span><i className="fas fa-sign-in-alt" id="icon" style={{fontSize: "20px", color: "#b6b6b6"}} ></i></span>
                <p>Login</p>
               
            </div>
        </div>
    )
}

export default Header;

// className="header__links"