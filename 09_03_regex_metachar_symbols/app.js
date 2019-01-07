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

// String to match
const str = "gray?";

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
