const repeatString = function(word, times) {
    if (times < 0) {return 'ERROR';}
    let str = '';
    for (let i = 0; i < times; i++) {
        str = str + word;
    }
    return str;
};
console.log(repeatString ('hey', 3));
// Do not edit below this line
module.exports = repeatString;
