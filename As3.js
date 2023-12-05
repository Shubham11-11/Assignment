
// 1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.



const statesInIndia = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

const consonantStartStates = statesInIndia.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));

console.log(consonantStartStates);

// // ////////////////////////////////////////////////

// 2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str = 'I love my India';

const reversedString = str.split(' ').reverse().join(' ');

console.log(reversedString);



// // ///////////////////////////////////////////////


// 3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = 'INDIA';


let stringArray = string.split('');


stringArray.splice(3, 0, 'O', 'N', 'E', 'S', 'I', 'A');


let output = stringArray.join('');

console.log(output);


// // ///////////////////////////////////////////////


// 4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

// let inputString = 'Delhi is the capital of India';
// const counts = countConsonantsAndVowels(inputString);

function countConsonantsAndVowels(inputString) {
    const vowels = 'aeiouAEIOU';
    let consonantCount = 0;
    let vowelCount = 0;

    for (let char of inputString) {
        if (char.match(/[a-zA-Z]/)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { consonantCount, vowelCount };
}


console.log('Consonant Count:', counts.consonantCount);
console.log('Vowel Count:', counts.vowelCount);




// // /////////////////////////////////////////////////


// 5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctFn(sentence, wrong, correct) {
    const regex = new RegExp('\\b' + wrong + '\\b', 'gi');
    const correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
}

const originalSentence = "This is a wrong sentence with the wrong word.";
const correctedSentence = correctFn(originalSentence, "wrong", "correct");

console.log(correctedSentence); 



// ////////////////////////////////////////////////


// 6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

const result = inputArr.filter(number => number > 5);

console.log(result);




// // /////////////////////////////////////////////


// 7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const result = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length,
}));
console.log(result);


////////////////////////////////////



// 8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repeatedSumOfDigits(number) {
    while (number >= 10) {
    number = String(number)
        .split('')
        .map(Number)
        .reduce((sum, digit) => sum + digit, 0);
    }
    return number;
}
const result = repeatedSumOfDigits(456);
console.log(result);



// // /////////////////////////////////////


// 9) Write a function to count the number of words in a paragraph.





function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}


const paragraph = "This is a sample paragraph with some words.";
const wordCount = countWords(paragraph);
console.log(wordCount);     






// 10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH



function reverseString(input) {
    return input.split('').reverse().join('');
}


const inputString = 'Hello';
const reversedString = reverseString(inputString);
console.log(reversedString); 




// // ///////////////////////////////////////////////



// 11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.


const input = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 64, subject2: 76, subject3: 87, subject4: 97, subject5: 37 } }
];

const output = input.map(studentObj => {
    const studentName = Object.keys(studentObj)[0];
    const subjects = Object.values(studentObj[studentName]);
    const average = subjects.reduce((sum, mark) => sum + mark, 0) / subjects.length;
    return { [studentName]: { average } };
});

console.log(output);



// // ///////////////////////////////////////////////////////

