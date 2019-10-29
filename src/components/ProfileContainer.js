import React from 'react';

export default class ProfileContainer extends React.Component {

    render(){
        return(
            <div className="heroCard batman">
                <img src="/batman.png" alt="batman" />
                <p>Batman: Select a hero above.<span role="img" aria-label="Up Arrow"> ⬆️⬆️⬆️</span></p>
        	</div>
        )
     }
}
