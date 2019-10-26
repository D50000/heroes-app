import React from 'react';
import { NavLink } from "react-router-dom";

// import components
import SingleHero from "./SingleHero";

export default class Heroes extends React.Component {
	state = {
        heroes: []
    };

	// Life cycle: fetch the api when mount.
	componentDidMount(){
		fetch("https://hahow-recruit.herokuapp.com/heroes")
			.then(function(response){
				return response.json();
			})
			.then(heroes => {
				// console.log(typeof(heroes));
				this.setState({ heroes: heroes });
				console.log(heroes);
			});
	}

    render(){
       return(
			<div className="container">
				{this.state.heroes.map( hero => 
				<NavLink to={{pathname: `/heroes/${hero.id}`}} activeClassName="selected" key={hero.id}>
					<SingleHero
						key={hero.id}
						id={hero.id}
						image={hero.image}
						name={hero.name}
					/>
				</NavLink>
				)}
			</div>
        )
     }
}
