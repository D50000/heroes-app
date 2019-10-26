import React from 'react';

export default class HeroProfile extends React.Component {

    render(){
        return(
			<section>
                <div className="leftBox">
                    {/* Strength */}
                    <div>
                        <span>STR</span>
                        <button>+</button>
                        <span>0</span>
                        <button>-</button>
                    </div>
                    {/* Intelligence */}
                    <div>
                        <span>INT</span>
                        <button>+</button>
                        <span>0</span>
                        <button>-</button>
                    </div>
                    {/* Agility */}
                    <div>
                        <span>AGI</span>
                        <button>+</button>
                        <span>0</span>
                        <button>-</button>
                    </div>
                    {/* Luck */}
                    <div>
                        <span>LUK</span>
                        <button>+</button>
                        <span>0</span>
                        <button>-</button>
                    </div>
                </div>
                <div className="rightBox">
                    <div>
                        <p>剩餘點數：
                            <span>30</span>
                        </p>
                    </div>
                    <button>儲存！</button>  
                </div>
            </section>
        )
     }
}
