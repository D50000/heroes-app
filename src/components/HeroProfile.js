import React from 'react';

export default class HeroProfile extends React.Component {
    state = {};

    componentDidMount() {
        this.handleLoadProfile();
    }

    componentDidUpdate(){
        this.handleLoadProfile();
    }
    
    handleLoadProfile = async () => {
        const id = this.props.location.state.index;
        const url = `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`;
        const res = await fetch(url);
        const data = await res.json();

        for (let k of Object.keys(data)) {
            if (this.state[k] !== data[k]) {
                this.setState(data);
                break;
            }
        }
        console.log(data, this.state);
    }


    render(){
        const { str, int, agi, luk } = this.state;

        return(
			<section>
                <div className="leftBox">
                    {/* Strength */}
                    <div>
                        <span>STR</span>
                        <button>+</button>
                        { str && <span>{str}</span> }
                        <button>-</button>
                    </div>
                    {/* Intelligence */}
                    <div>
                        <span>INT</span>
                        <button>+</button>
                        { int && <span>{int}</span> }
                        <button>-</button>
                    </div>
                    {/* Agility */}
                    <div>
                        <span>AGI</span>
                        <button>+</button>
                        { agi && <span>{agi}</span> }
                        <button>-</button>
                    </div>
                    {/* Luck */}
                    <div>
                        <span>LUK</span>
                        <button>+</button>
                        { luk && <span>{luk}</span> }
                        <button>-</button>
                    </div>
                </div>
                <div className="rightBox">
                    <div>
                        <p>剩餘點數：
                            <span>0</span>
                        </p>
                    </div>
                    <button>儲存！</button>  
                </div>
            </section>
        )
     }
}
