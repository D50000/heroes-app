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

	toggleMode = () => {
		document.onkeyup = function(e) {
			// let tmp = this.state.batman;
			if (e.key === "H") {
				alert("Batman arrives");
				// this.setState({ batman: 1 });
			} else {
				alert("Batman leaves");
				// this.setState({ batman: 0 });
			}
		};
	}

	// Load single hero status.
	loadProfile = id => {
		// function generator
		return () => {
			const url = `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`;
			fetch(url)
				.then(function(response){
					return response.json();
				})
				.then(data => {
					// console.log(typeof(data));
					this.setState({ status: data});
					console.log(data);
				});
		}
	}
	
    render(){
       return(
			<div className="container shadow p-3 mb-5 bg-white rounded">
				{this.state.heroes.map( hero => 
				<NavLink to={{pathname: `/heroes/${hero.id}`, state: { index: hero.id }}} 
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
