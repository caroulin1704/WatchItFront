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
                        <label>Name :</label><br></br>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label>First name :</label><br></br>
                        <input type="text" name="surname" placeholder="First Name" />
                    </div>
                    <div className="field">
                        <label>Username :</label><br></br>
                        <input type="text" name="pseudo" placeholder="Username" />
                    </div>
                    <div className="field">
                        <label>Password :</label><br></br>
                        <input type="text" name="password" placeholder="Password" />
                    </div>
                    <button className='fluid ui button'>Submit</button>
                </div>
            </form>
        </div>
    )
}