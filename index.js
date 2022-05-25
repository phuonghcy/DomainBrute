const dns = require('dns');

var fs = require("fs")

/*
 * A simple function for brute forcing a list of subdomains
 * given a maximum length of each subdomain.
 */
const generateSubdomains = function(length) {

    /*
     * A list of characters from which to generate subdomains.
     *
     * This can be altered to include less common characters
     * like '-'.
     *
     * Chinese, Arabic, and Latin characters are also
     * supported by some browsers.
     */
    const charset = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
    let subdomains = charset;
    let subdomain;
    let letter;
    let temp;

    /*
     * Time Complexity: o(n*m)
     * n = length of string
     * m = number of valid characters
     */
    for (let i = 1; i < length; i++) {
        temp = [];
        for (let k = 0; k < subdomains.length; k++) {
          subdomain = subdomains[k];
          
          for (let m = 0; m < charset.length; m++) {
            letter = charset[m];
            temp.push(subdomain + letter);
          }
        }
        subdomains = temp
    }

    return subdomains;
}

const subdomains = generateSubdomains(4);

console.log(subdomains)


