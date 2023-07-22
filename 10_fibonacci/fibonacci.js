const fibonacci = function(sequenceNumber) {
    if (sequenceNumber < 0) {return 'OOPS';}
    let result = 1;
    for (let lastOne = 1, lastButOne = 0; sequenceNumber >= 2; sequenceNumber--) {
        result = lastOne + lastButOne;
        lastButOne = lastOne;
        lastOne = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
