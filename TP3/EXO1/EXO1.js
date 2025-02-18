function degreeC(tempF) {
    let tempC = (5 / 9) * (tempF - 32);
    console.log(`température en Fahrenheit : ${tempF}`);
    console.log(`température en Celsius : ${tempC}`);
}
let tempF=prompt("Entrez la température en Fahrenheit : ");
degreeC(tempF);