import React from 'react';
import { NavLink } from "react-router-dom";

// import components
import SingleHero from "./SingleHero";

export default class Heroes extends React.Component {
	state = {
		heroes: [],
		status: {}
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

	// Load single hero status.
	loadProfile = id => {
		// function generator
		return () => {
			const status = {...this.state.status};
			const url = `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`;
			fetch(url)
				.then(function(response){
					return response.json();
				})
				.then(data => {
					// console.log(typeof(data));
					status[id] = data;
					this.setState({ status: status});
					console.log(data);
				});
		}
	}

    render(){
       return(
			<div className="container">
				{this.state.heroes.map( hero => 
				<NavLink to={{pathname: `/heroes/${hero.id}`, state: { data: this.state.status, index: hero.id }}} 
					activeClassName="selected" key={hero.id}>
					<SingleHero
						key={hero.id}
						id={hero.id}
						image={hero.image}
						name={hero.name}
						loadProfile={this.loadProfile}
					/>
				</NavLink>
				)}
			</div>
        )
     }
}
