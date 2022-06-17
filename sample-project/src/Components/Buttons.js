import React from "react";
import "./Buttons.css";
import PageColor from "./PageColor";

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

    pageColor(){
        if(this.selectedButton === "random-background-color"){
            return document.body.style.backgroundColor = "green"
        } else {
            return document.body.style.backgroundColor = "red"
        }
    }

    render(){
        return(
              <form className="buttons">
                  <label>
                    <input type = "radio" 
                    name = "user-input"
                    className="button1"
                    value = "random-background-color"
                    checked = {this.state.selectedButton === "random-background-color"}
                    onChange = {this.handleButtonChange}
                    onClick = {document.body.style.backgroundColor = 'red'}
                    />Random Background Color
                  </label>
                  <PageColor />
                  <label>
                    <input type = "radio" 
                    name = "user-input"
                    className="button2"
                    value = "random-joke"
                    checked = {this.state.selectedButton === "random-joke"}
                    onChange = {this.handleButtonChange}
                    />Random Joke
                  </label>
                  {this.pageColor}
              </form>
        )
    }
}

export default Buttons;