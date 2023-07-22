const sumAll = function(firstN, lastN) {
    switch (true) {
        case firstN < 0 || lastN < 0:
        case typeof firstN != 'number' || typeof lastN != 'number':
        return 'ERROR';
    }
    if (firstN > lastN) {
        let temporary = lastN;
        lastN = firstN;
        firstN = temporary;
    }
    let result = 0;
    for (let i = lastN; i >= firstN; i--) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll; 
