//PURPOSE: reset all HSL to white to reset background
function PlainHSL(){
    document.body.style.background = 'white';
    document.getElementById('color1').innerHTML = 'hsl(0, 0%, 100%)';
    document.getElementById('color2').innerHTML = 'hsl(0, 0%, 100%)';
  }
  
  export default PlainHSL;