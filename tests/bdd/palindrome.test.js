var expect = require('expect.js'),
    Palindrome = require('../../lib/palindrome'),
    assert = require('assert'),
    palidromes = ['aba', 'oVo', 'A MAN A PLAN A CANAL PANAMA'],
    notPalidromes = ['macaco', 'AirPlane', 'hey, dont stop the party!', 10, {}, null, ""];

describe('Palindrome', function() {
    describe('isPalindrome()', function() {
        it('isPalindrome() should return true if the param is a valid string', function() {
            var palidromeValidator = new Palindrome();
            palidromes.forEach(function(string) {
                expect(palidromeValidator.isPalindrome(string)).to.be(true);
                expect(palidromeValidator._string).to.be.an('string');
                expect(palidromeValidator._string).to.be(string);
            });
        });

        it('isPalindrome() should return false if the param is not a valid string', function() {
            var palidromeValidator = new Palindrome();
            notPalidromes.forEach(function(string) {
                expect(palidromeValidator.isPalindrome(string)).to.be(false);
                expect(palidromeValidator._string).to.be.an('string');
            });
        });
    });
});
