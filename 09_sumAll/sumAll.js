const sumAll = function(first, last) {
    // Reorganize inputs
    if (last < first) {
        let placeholder = first;
        first = last;
        last = placeholder;
    }

    if (first < 0 || last < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(first) || !Number.isInteger(last)) {
        return 'ERROR';
    }

    if (typeof first !== 'number' || typeof last !== 'number') {
        return 'ERROR';
    }
    
    let sum = 0;
    for (let i=first; i <= last; i++) {
        sum = sum + i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
