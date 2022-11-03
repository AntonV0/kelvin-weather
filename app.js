// You can change the Kelvin value to change both the Celsius and Fahrenheit values

// Today's forecast in Kelvin
let kelvin = 293;
console.log(kelvin);

// Today's forecast in Celsius
let celsius = kelvin - 273;
console.log(celsius);

// Today's forecast in Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

// Rounding down Fahrenheit decimals
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

// String interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Converting to the Newton Scale
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} Newtons.`);