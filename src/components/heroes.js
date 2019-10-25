import React from 'react';

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
				console.log(typeof(heroes));
				this.setState({ heroes: heroes });
				console.log(heroes);
			});
	}

    render(){
       return(
		   <table>
				<tr className="container">
					{this.state.heroes.map( hero => 
						<SingleHero
							key={hero.id}
							image={hero.image}
							name={hero.name}
						/>
					)}
				</tr>
		   </table>
        )
     }
}
