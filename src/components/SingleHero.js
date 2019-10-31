import React from "react";

export default class SingleHero extends React.Component {

    render(){
        const { id, image, name } = this.props;

        return(
			<div className="heroCard" onClick={this.props.loadProfile(id)}>
                <img src={image} alt={name} />
                <p>{name}</p>
        	</div>   
        )
     }
}
