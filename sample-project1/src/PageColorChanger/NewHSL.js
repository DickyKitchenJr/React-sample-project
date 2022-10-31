//PURPOSE: create random HSL
function NewHSL(){
    let hue = Math.floor(Math.random() * 361)
    let saturation = Math.floor(Math.random() * 101)
    let lightness = Math.floor(Math.random() * 101)
    let HSL = 'hsl('+ hue + ', ' + saturation + '%, ' + lightness + '%)'
    return HSL;
}

export default NewHSL;