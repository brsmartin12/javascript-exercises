const removeFromArray = function(arr, ...toBeRemoved) {
    let resultsArr = [];

    for (const i of arr) {
        if (!toBeRemoved.includes(i)) {
            resultsArr.push(i);
        }
    }
    return resultsArr;
};

// Do not edit below this line
module.exports = removeFromArray;
