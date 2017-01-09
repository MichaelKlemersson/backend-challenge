function Palindrome() {
    this._string = "";
};

Palindrome.prototype.isPalindrome = function (string) {
    if (typeof string === "string" && string.trim().length) {
        this._string = string;

        var text = (this._string.replace(/[^\s\w|(!)]/i, '').split(' ').join('')).split('').join('');
        var reversedString = text.split('').reverse().join('');

        return text === reversedString;
    } else {
        this._string = "";
        return false;
    }
};

module.exports = Palindrome;
