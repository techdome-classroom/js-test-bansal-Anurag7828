/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];
    return ths[Math.floor(s / 1000)] + hrns[Math.floor((s % 1000) / 100)] + tens[Math.floor((s % 100) / 10)] + ones[s % 10];
};
};


module.exports={romanToInt}
