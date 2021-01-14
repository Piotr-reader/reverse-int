module.exports = function reverse(n) {
    let m = Math.abs(n);
    return parseInt(m.toString().split("").reverse().join(""));
};
