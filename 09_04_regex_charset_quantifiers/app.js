let re;

re = /hello/;
re = /hello/i;

// Meta character symbols
re = /^h/i; // starts with
re = /d$/i; // ends with
re = /^hello$/; // starts and end with
re = /h.llo/; // matches any ONE character (hxllo, but not hxxllo)
re = /h*llo/; // matches any character 0 or more times (hxxllo or hllo)
re = /gra?e?y/i; //optional character gray, grey, or gry
re = /gra?e?y\?/i; //Escape character (gray? grey? or gry?)

// Brackets [] - Character sets
// modification of re = /gra?e?y/i; //optional character gray, grey, or gry
re = /gr[ae]y/i; // Must be an a or e (gry will not work no)
re = /[GF]ray/; // must be a G or F (Gray, Fray, not Xray)
re = /[^GF]ray/i; // match anything except G or F (opposite of prev)
re = /^[GF]ray/i; // must start with a G or F
re = /[A-Z]ray/; // any upper case (Gray, not gray)
re = /[a-z]ray/; // any lower case letter
re = /[A-Za-z]ray/; // match any letter xray, Xray
re = /[0-9]ray/; // match any digit
re = /[0-9][0-9]ray/; // matches 10ray

// Braces {} - Quantifiers
re = /hello/i;
re = /hel{2}o/i; // l must exactly 2 times
re = /hel{2,4}o/i; // must occur 2 to 4 times
re = /hel{2,}o/i; // must occur at least 2 times (helo will fail)

// Parantheses ()  - Grouping
re = /[0-9]x{3}/; // looks for number, xxx
re = /([0-9]x){3}/; // looks for 2x2x2x

// String to match
const str = "1x1x1x";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`"${str}" matches ${re.source}`);
  } else {
    console.log(`"${str}" does not match ${re.source}`);
  }
}

reTest(re, str);
