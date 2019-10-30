import React from 'react';
import { Link } from "react-router-dom";

export default class ProfileContainer extends React.Component {

    render(){
        const url = process.env.NODE_ENV === "production" ? "/heroes-app" : "";
        return(
            <Link to="/JOKER">
                <div className="heroCard batman">
                    <img src={`${url}/batman.png`} alt="batman" />
                    <p>Batman: Select a hero.<span role="img" aria-label="Up Arrow"> ⬆️⬆️⬆️</span></p>
                    <p>Where is Joker ??</p>
                </div>
            </Link>
        )
     }
}
