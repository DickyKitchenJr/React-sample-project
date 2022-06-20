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
                    value = "random-background-color"
                    checked = {this.state.selectedButton === "random-background-color"}
                    onChange = {this.handleButtonChange}
                    />Random Background Color
                  </label>
              
                  <label>
                    <input type = "radio" 
                    name = "user-input"
                    className="button2"
                    value = "random-joke"
                    checked = {this.state.selectedButton === "random-joke"}
                    onChange = {this.handleButtonChange}
                    />Random Joke
                  </label>
              </form>
                <PageColor />
            </div>
        )
    }
}

export default Buttons;