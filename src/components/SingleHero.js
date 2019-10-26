import React from 'react';
import { Link } from "react-router-dom";

export default class SingleHero extends React.Component {

    render(){
        const { id, image, name } = this.props;

        return(
			<td className="heroCard">
                <Link to="/heroes/1">
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </Link>
        	</td>   
        )
     }
}
