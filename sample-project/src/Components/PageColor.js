import React from "react";
import "./PageColor.css";

//Random HSL Gradient Generator section

//create random HSL
function newHSL(){
    let hue = Math.floor(Math.random() * 361)
    let saturation = Math.floor(Math.random() * 101)
    let lightness = Math.floor(Math.random() * 101)
    let HSL = 'hsl('+ hue + ', ' + saturation + '%, ' + lightness + '%)'
    return HSL;
}

//assign 2 random HSL to gradient
function newLinearGradient(){
    let newGradient = [['0'],['1']];
    let newLG = ''
    for(i of newGradient){
        newGradient[i] = newHSL();
    };
    newLG = 'linear-gradient(to bottom right, ' + newGradient[0] + ', ' + newGradient[1] + ')'
    document.body.style.background = newLG;
    document.getElementById('color1').innerHTML = newGradient[0];
    document.getElementById('color2').innerHTML = newGradient[1];
};

//reset all HSL to white to reset background
function plainHSL(){
    document.body.style.background = 'white'
    document.getElementById('color1').innerHTML = 'hsl(0, 0%, 100%)';
    document.getElementById('color2').innerHTML = 'hsl(0, 0%, 100%)';
}

//generate random HSL gradient and reset HSL on respective button clicks
let clickHSL = document.getElementById('clickmeHSL');
clickHSL.onclick = newLinearGradient;
let resetHSL = document.getElementById('resetHSL');
resetHSL.onclick = plainHSL;

class PageColor extends React.Component{
    render(){
        return(
        <div className="box1">
            <h2>Want a different background color?</h2>
            <button id="clickmeHSL">Click Me</button>
            <p>Current HSL values:</p>
            <ul>
                <li>HSL 1 = <span id="color1">hsl(0, 0%, 100%)</span></li>
                <li>HSL 2 = <span id="color2">hsl(0, 0%, 100%)</span></li>
            </ul>
            <button id="resetHSL">Reset</button>
        </div>
        )
    }
}

export default PageColor;