function palindrome(str) {
    const letter = [];
    let reverseStr = "";
    for (let i = 0; i < str.length; i++) {
        letter.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
        reverseStr = reverseStr + letter.pop();
    }
    if (str === reverseStr) {
        return str + " is a Palindrome."
    } else {
        return str + " is not a Palindrome."
    }
}

console.log(palindrome("Racecar"));