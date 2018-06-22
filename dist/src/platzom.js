'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;

    var lenght = str.length;
    var reverse = str.split('').reverse().join('');
    if (str == reverse) {
        var capitalize = true;
        var minMay = str.split('');
        for (var i = 0; i < lenght; i++) {
            minMay[i] = capitalize ? minMay[i].toUpperCase() : minMay[i].toLowerCase();
            capitalize = !capitalize;
        }
        return minMay.join('');
    }

    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    if (lenght >= 10) {
        var firstHalf = str.slice(0, lenght / 2);
        var secondHalf = str.slice(lenght / 2);

        translation = firstHalf + '-' + secondHalf;
    }

    return translation;
}