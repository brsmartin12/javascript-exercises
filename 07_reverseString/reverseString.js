const reverseString = function(string) {
    const stringArr = string.split('');
    const reverseArr = stringArr.reverse();
    const reverseString = reverseArr.join('');
    return reverseString;
};
// Do not edit below this line
module.exports = reverseString;
