import React from 'react';

export default class HeroProfile extends React.Component {
    // {str, int, agi, luk}
    state = {
        skill: {},
        left: 0
    };

    // Loading datas
    componentDidMount() {
        console.log("mount")
        this.handleLoadProfile();
    }

    // componentDidUpdate(){
    //     console.log("update")
    //     this.handleLoadProfile();
    // }
    
    handleLoadProfile = async () => {
        const id = this.props.location.state.index;
        const url = `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`;
        const res = await fetch(url);
        const data = await res.json();

        for (let k of Object.keys(data)) {
            if (this.state.skill[k] !== data[k]) {
                this.setState({skill: data, left: 0});
                break;
            }
        }
    }

    // Modify skill points
    changeSkill = (skillName, method) => {
        return () => {
            let skill = this.state.skill;
            let left = this.state.left
            if(method === "+" && left === 0){
                alert("無點數了");
                return false;
            }else if(method === "+"){
                skill[skillName] += 1;
                left -= 1;
            }else if(method === "-" && skill[skillName] === 0){
                alert("不能低於0");
                return false;
            }else{
                skill[skillName] -= 1;
                left += 1;
            }
            console.log(left);
            console.log(skill);
            this.setState({skill, left});
        }
    }

    render(){
        const { str, int, agi, luk } = this.state.skill;
        return(
			<section>
                <div className="leftBox">
                    {/* Strength */}
                    <div>
                        <span>STR</span>
                        <button onClick={this.changeSkill("str", "+")}>+</button>
                        { str && <span>{str}</span> }
                        <button onClick={this.changeSkill("str", "-")}>-</button>
                    </div>
                    {/* Intelligence */}
                    <div>
                        <span>INT</span>
                        <button onClick={this.changeSkill("int", "+")}>+</button>
                        { int && <span>{int}</span> }
                        <button onClick={this.changeSkill("int", "-")}>-</button>
                    </div>
                    {/* Agility */}
                    <div>
                        <span>AGI</span>
                        <button onClick={this.changeSkill("agi", "+")}>+</button>
                        { agi && <span>{agi}</span> }
                        <button onClick={this.changeSkill("agi", "-")}>-</button>
                    </div>
                    {/* Luck */}
                    <div>
                        <span>LUK</span>
                        <button onClick={this.changeSkill("luk", "+")}>+</button>
                        { luk && <span>{luk}</span> }
                        <button onClick={this.changeSkill("luk", "-")}>-</button>
                    </div>
                </div>
                <div className="rightBox">
                    <div>
                        <p>剩餘點數：
                            { this.state.left && <span>{this.state.left}</span>}
                        </p>
                    </div>
                    <button>儲存！</button>  
                </div>
            </section>
        )
     }
}
