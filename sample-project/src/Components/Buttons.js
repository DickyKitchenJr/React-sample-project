import React from "react";
import "./Buttons.css";
import PageColor from "./PageColorChanger/PageColor";

class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedButton: null
        };
    }

    handleButtonChange = changeEvent => {
        this.setState({
            selectedButton: changeEvent.target.value
        });
    }


    render(){
        return(
            <div>
              <form className="buttons">
                  <label>
                    <input type = "radio" 
                    name = "user-input"
                    className="button1"
                    value = "spin-left"
                    checked = {this.state.selectedButton === "spin-left"}
                    onChange = {this.handleButtonChange}
                    // onClick = {document.getElementsByClassName('App-logo').style.animation = "animation: App-logo-spin infinite 20s linear"}
                    />Spin Left
                  </label>
              
                  <label>
                    <input type = "radio" 
                    name = "user-input"
                    className="button2"
                    value = "spin-right"
                    checked = {this.state.selectedButton === "spin-right"}
                    onChange = {this.handleButtonChange}
                    // onClick = {document.getElementsByClassName('App-logo').style.animation = "animation: App-logo-spin-reverse infinite 20s linear"}
                    />Spin Right
                  </label>
              </form>
                <PageColor />
            </div>
        )
    }
}

export default Buttons;