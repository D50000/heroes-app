import React from 'react';
import { NavLink } from "react-router-dom";

export default class SingleHero extends React.Component {

    render(){
        const { id, image, name } = this.props;

        return(
                
			<div className="heroCard">
                    <img src={image} alt={name} />
                    <p>{name}</p>
        	</div>   

        )
     }
}
