import React from 'react';
import { Link } from "react-router-dom";

export default class NotFound extends React.Component {

    render(){
        const url = process.env.NODE_ENV === "production" ? "/heroes-app" : "";
        return(
            <Link to="/heroes">
                <div className="heroCard joker">
                    <img src={`${url}/joker.png`} alt="joker" />
                    <p>Joker: URL Not Found </p>
                </div>
            </Link>
        )
     }
}
