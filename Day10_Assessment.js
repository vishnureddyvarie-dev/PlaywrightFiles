//Count Characters: Write a JavaScript program to count the occurrence of each character in a given string.

let srt18='Vishnu Vardhan Reddy'
let charCount={}
for (let Char of srt18)
{
    if (charCount[Char]){
        charCount[Char]=charCount[Char]+1
    }else {
            charCount[Char]=1
        }

    }
    console.log(charCount)


    // Count Words: Write a JavaScript program to count the occurrence of each word in a given sentence
let str19='Reddivari Vishnu Vardhan Reddy Reddivari'

let wordCount={}
let words=str19.split(' ')
for (let word of words)
{
    if (wordCount[word]){
        wordCount[word]=wordCount[word]+1
    }else {
            wordCount[word]=1
        }

    }
    console.log(wordCount)

    
    //Duplicate Characters: Write a JavaScript program to find all duplicate characters in a given string.

let str20='ReddivariReddivarigghttkkko'
let duplicateChars={}
for (let char of str20) {
    if (duplicateChars[char]) {
        duplicateChars[char]++;
    } else {
        duplicateChars[char] = 1;
    }
}
// Filter out characters that occur only once
for (let char in duplicateChars) {
    if (duplicateChars[char] === 1) {
        delete duplicateChars[char];
    }
}
console.log(duplicateChars);