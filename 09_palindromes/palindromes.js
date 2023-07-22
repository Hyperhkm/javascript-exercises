const palindromes = function (str) {
    const regex = /[\w]/g;
    let newStr = str.toLowerCase().match(regex);
    return newStr.join('') == newStr.reverse().join('');
};



// Do not edit below this line
module.exports = palindromes;
