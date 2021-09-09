//Create a function that takes voltage and current and returns the calculated power.

/*
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600
 */
function circuitPower(voltage,current) {
    return (voltage * current);
}
console.log(circuitPower(230, 10)); 
//➞ 2300
console.log(circuitPower(110, 3)); 
//➞ 330
console.log(circuitPower(480, 20));
// ➞ 9600;