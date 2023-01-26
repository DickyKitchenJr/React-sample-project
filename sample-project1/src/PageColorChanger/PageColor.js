import React from 'react';
import PlainHSL from './PlainHSL';
import NewLinearGradient from './NewLinearGradient';
import './PageColor.css'

class PageColor extends React.Component{
  render(){
    return(
      <div className="box1">
            <h2>Want a different background color?</h2>
            <button id="clickmeHSL" onClick={NewLinearGradient}>Click Me</button>
            <p>Current HSL values:</p>
            <ul className='hslList'>
                <li>HSL 1 = <span id="color1" data-testid="color1">hsl(0, 0%, 100%)</span></li>
                <li>HSL 2 = <span id="color2" data-testid="color2">hsl(0, 0%, 100%)</span></li>
            </ul>
            <button id="resetHSL" onClick={PlainHSL}>Reset</button>
        </div>
    )
  }
}

export default PageColor;