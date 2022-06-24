import React from "react";
import "./Buttons.css";
import smile from '../smile.png'

class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedButton: "spin-smile-left"
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
                    value = "spin-smile-left"
                    checked = {this.state.selectedButton === "spin-smile-left"}
                    onChange = {this.handleButtonChange}
                    />Spin Left
                  </label>
              
                  <label>
                    <input type = "radio" 
                    name = "user-input"
                    className="button2"
                    value = "spin-smile-right"
                    checked = {this.state.selectedButton === "spin-smile-right"}
                    onChange = {this.handleButtonChange}
                    />Spin Right
                  </label>
              </form>
              {/* trying to figure out how to make the image className vary depending on the radio button input */}
              <img src={smile} className='App-logo' alt="logo" />
            </div>
        )
    }
}

export default Buttons;