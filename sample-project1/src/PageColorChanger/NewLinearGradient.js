import NewHSL from './NewHSL'

//assign 2 random HSL to gradient
function NewLinearGradient(){
  let newGradient = [['0'],['1']];
  let newLG = ''
  for(let i = 0; i < newGradient.length; i++){
      newGradient[i] = NewHSL();
  };
  newLG = 'linear-gradient(to bottom right, ' + newGradient[0] + ', ' + newGradient[1] + ')'
  document.body.style.background = newLG;
  document.getElementById('color1').innerHTML = newGradient[0];
  document.getElementById('color2').innerHTML = newGradient[1];
};

export default NewLinearGradient;