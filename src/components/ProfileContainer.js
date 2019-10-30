import React from 'react';

export default class ProfileContainer extends React.Component {

    render(){
        const url = process.env.NODE_ENV === "production" ? "/heroes-app" : "";
        return(
            <div className="heroCard batman">
                <img src={`${url}/batman.png`} alt="batman" />
                <p>Batman: Select a hero above.<span role="img" aria-label="Up Arrow"> ⬆️⬆️⬆️</span></p>
        	</div>
        )
     }
}
