/*
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples
lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/


function lessThanOrEqualToZero(num) {
	if(num <= 0) {
        return true;
    }
    else {
        return false;
    }

}

console.log(lessThanOrEqualToZero(-2));
console.log(lessThanOrEqualToZero(2));
console.log(lessThanOrEqualToZero(0));