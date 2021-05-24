// STACK 

// FUNCTIONS 
// 1. PUSH: For placing element on to stack
// 2. POP: For removing top element of the stack
// 3. PEEK: For displaying top element of the stack
// 4. LENGTH/SIZE: How many elements are on the stack

// PALINDROME Problem Solution using Stack
const letter = [];
const word = "1010";
let reverseWord = "";

// push word element into letter array
for (let i = 0; i < word.length; i++) {
    letter.push(word[i]);
}

// pop element and store them into the reverseWord
for (let i = 0; i < word.length; i++) {
    reverseWord = reverseWord + letter.pop();
}

// Check if the match in the reverse order or not
if (word === reverseWord) {
    console.log(word + " is a Palindrome");
} else {
    console.log(word + " is not a Palindrome");
}

