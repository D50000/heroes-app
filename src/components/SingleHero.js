import React from 'react';

export default class SingleHero extends React.Component {

    render(){
        const { id, image, name } = this.props;

        return(
			<td className="heroCard">
                <img src={image} alt={name} />
                <p>{name}</p>
        	</td>   
        )
     }
}
