import React from 'react';
import { Link } from "react-router-dom";

export default class ProfileContainer extends React.Component {
    state = {
		batman: 0
    };

    componentDidMount(){
        console.log("xxxxxxx");
        document.addEventListener("keydown", this.onKeyDown);
    }

    componentWillUnmount(){
        console.log("YYYYY");
        document.removeEventListener("keydown", this.onKeyDown)
    }

    onKeyDown = (e) => {
		if (e.key === "B") {
			alert("Batman arrives");
			this.setState({ batman: 1 });
		}
	}

    badmanRender = (batman, url) => {
        if (batman === 1) {
            return (
                <div className="heroCard batman">
                    <img src={`${url}/batman.png`} alt="batman" />
                    <p>Batman: Select a hero.<span role="img" aria-label="Up Arrow"> ⬆️⬆️⬆️</span></p>
                    <p>Where is Joker ??</p>
                </div>
            )
        } else {
            return (
                <p></p>
            )
        }
    }


    render(){
        const url = process.env.NODE_ENV === "production" ? "/heroes-app" : "";
        return(
            <Link to={{pathname: "/JOKER", state: { batman: this.state.batman }}}>
                { this.badmanRender(this.state.batman, url) }
            </Link>
        )
     }
}
