import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class HeroProfile extends React.Component {
    // {str, int, agi, luk}
    state = {
        skill: {},
        left: 0,
        heroId: undefined,
        text: ""
    };

    // Loading datas for access directly.
    componentDidMount() {
        console.log("mount")
        this.handleLoadProfile();
    }

    componentDidUpdate(){
        console.log("update")
        const id = this.props.location.state.index;
        const nowId = this.state.heroId;
        if(id !== nowId){
            this.handleLoadProfile();
            console.log(`Hero Id change: ${id} !== ${nowId}`)
        }
    }
    
    handleLoadProfile = async () => {
        const id = this.props.location.state.index;
        const url = `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`;
        const res = await fetch(url);
        const data = await res.json();

        for (let k of Object.keys(data)) {
            if (this.state.skill[k] !== data[k]) {
                this.setState({skill: data, left: 0, heroId: id, text: ""});
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
                this.setState({text: "無點數了"});
                return false;
            }else if(method === "+"){
                skill[skillName] += 1;
                left -= 1;
            }else if(method === "-" && skill[skillName] === 0){
                this.setState({text: "不能低於0"});
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
    
	updateSkillPoints = async (patchData) => {
		// return () => {
            if(this.state.left !== 0){
                this.setState({text: "技能點尚未點完！"});
                return false;
            }
            const id = this.state.heroId;
			const patchUrl = `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`;
			const res = await fetch(patchUrl, {
				method: "PATCH",
				headers: {
					// "Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(patchData)
			});
            console.log(res.status, res.statusText);
            this.setState({text: "技能點更新成功！"});
		// }
	}

    render(){
        const { str, int, agi, luk } = this.state.skill;
        return(

            <TransitionGroup component="div" className="profileAnimate">
            <CSSTransition classNames="profileAnimate" key={this.state.heroId} timeout={{enter:250, exit:250}}>
			<section className="shadow p-3 mb-5 bg-white rounded">
                <div className="leftBox">
                    {/* Strength */}
                    <div className="strSkill">
                        <span>STR</span>
                        <button onClick={this.changeSkill("str", "+")}>+</button>
                        { str && <span>{str}</span> }
                        <button className="decBtn" onClick={this.changeSkill("str", "-")}>-</button>
                    </div>
                    {/* Intelligence */}
                    <div className="intSkill">
                        <span>INT</span>
                        <button onClick={this.changeSkill("int", "+")}>+</button>
                        { int && <span>{int}</span> }
                        <button className="decBtn" onClick={this.changeSkill("int", "-")}>-</button>
                    </div>
                    {/* Agility */}
                    <div className="agiSkill">
                        <span>AGI</span>
                        <button onClick={this.changeSkill("agi", "+")}>+</button>
                        { agi && <span>{agi}</span> }
                        <button className="decBtn" onClick={this.changeSkill("agi", "-")}>-</button>
                    </div>
                    {/* Luck */}
                    <div className="lukSkill">
                        <span>LUK</span>
                        <button onClick={this.changeSkill("luk", "+")}>+</button>
                        { luk && <span>{luk}</span> }
                        <button className="decBtn" onClick={this.changeSkill("luk", "-")}>-</button>
                    </div>
                </div>
                <div className="middleBox">
                    { luk && <span>{this.state.text}</span> }
                </div>
                <div className="rightBox">
                    <div>
                        <p>剩餘點數：
                            { this.state.left && <span>{this.state.left}</span>}
                        </p>
                    </div>
                    <button onClick={() => {this.updateSkillPoints(this.state.skill)}}>儲存</button>  
                </div>
            </section>
            </CSSTransition>
            </TransitionGroup>
        )
     }
}
