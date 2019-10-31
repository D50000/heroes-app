import React from 'react';
import { Link } from "react-router-dom";

export default class NotFound extends React.Component {
    jokerRender = (batman, url) => {
        if (batman === 1) {
            return (
                <div className="heroCard joker">
                    <img src={`${url}/joker.png`} alt="joker" />
                    <p>Joker: URL Not Found </p>
                </div>
            )
        } else {
            return (
                <p>URL Not Found </p>
            )
        }
    }

    render(){
        let batman = 0;
        if(this.props.location.state !== undefined){
            batman = this.props.location.state.batman;
        };
        const url = process.env.NODE_ENV === "production" ? "/heroes-app" : "";
        return(
            <Link to="/heroes">
                { this.jokerRender(batman, url) }
            </Link>
        )
     }
}
