import React from "react";
import "../styles/Signup.css" 

export default function Signup(){
    return (
        <div className="container">
            <form>
                <h1>Join us !</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Name :</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label>First name :</label>
                        <input type="text" name="surname" placeholder="First Name" />
                    </div>
                    <div className="field">
                        <label>Username :</label>
                        <input type="text" name="pseudo" placeholder="Username" />
                    </div>
                    <div className="field">
                        <label>Password :</label>
                        <input type="text" name="password" placeholder="Password" />
                    </div>
                </div>
            </form>
        </div>
    )
}