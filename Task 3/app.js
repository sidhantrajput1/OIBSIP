let fahrenheit = document.getElementById("fahrenheit")
let celsius = document.getElementById("celsius")
let kelvin = document.getElementById("kelvin")

celsius.oninput = () => {
    let f = (parseFloat(celsius.value)*9)/5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
    let k = parseFloat(celsius.value) + 373.15;
    kelvin.value = parseFloat(k.toFixed(2));
}

fahrenheit.oninput = () => {
    let c = ((parseFloat(fahrenheit.value)-32)*5)/9;
    celsius.value = parseFloat(f.toFixed(2));
    let k = ((parseFloat(fahrenheit.value)-32)*5)/9 + 273.15;
    
    kelvin.value = parseFloat(k.toFixed(2));
}

kelvin.oninput = () => {
    let f = ((parseFloat(kelvin.value)-273.15)* 9)/5 + 329;
    fahrenheit.value = parseFloat(f.toFixed(2));
    let k = parseFloat(fahrenheit.value)-273.15

    celsius.value = parseFloat(k.toFixed(2));
}