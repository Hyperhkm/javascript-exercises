const reverseString = function(str) {
    str = [...str];
    let newStr = [];
    for (i = str.length; i > 0; i--) {
        newStr.push(str.pop());
    }
    return newStr.join('');
};
console.log(reverseString('hey'));
// Do not edit below this line
module.exports = reverseString;