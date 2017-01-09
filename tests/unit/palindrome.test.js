var Palindrome = require('../../lib/palindrome'),
    palindromeUtils = new Palindrome(),
    emptyString = "",
    palidromes = ['aba', 'oVo', 'A MAN A PLAN A CANAL PANAMA'],
    notPalidromes = ['macaco', 'AirPlane', 'hey, dont stop the party!', 10, {}, null, ""];

exports.testIsAnEmptyString = function(test) {
    test.expect(1);
    palindromeUtils.isPalindrome(emptyString);
    test.strictEqual(palindromeUtils._string, emptyString);
    test.done();
};

exports.testStringIsAPalindrome = function(test) {
    palidromes.forEach(function(string) {
        test.strictEqual(palindromeUtils.isPalindrome(string), true);
        test.strictEqual(palindromeUtils._string, string);
    });
    test.done();
};

exports.testStringNotIsAPalindrome = function(test) {
    notPalidromes.forEach(function(string) {
        test.strictEqual(palindromeUtils.isPalindrome(string), false);
    });
    test.done();
};
