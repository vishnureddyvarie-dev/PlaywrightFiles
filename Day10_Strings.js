//Slice
let str13 = 'playwright'

console.log(str13.slice(0,5))
console.log(str13.slice(4))

//Assigment is Substring VS Slice

// Split --- It will take Delimiter & it will return array of strings

let str14='Vishnu Vardhan Reddy'
let arr = str14.split(' ')
console.log(arr)

let str15 = 'viishniiinuiiiv'
console.log(str15.split( ))

// Repeat it will repeate the string n no.f times

let str16='*'
console.log(str16.repeat(20))

// Trim - Used to remoe the spaces
//trimStart
//trimEnd

let str17 ='       Vishnu     '
console.log(str17.trim())
console.log(str17.trimStart())
console.log(str17.trimEnd())


// padding
// padStart it will add padding to the start of the string
//padEnd it will add padding t the end of the string

console.log("5".padStart(3,'0'))


//Concadination

console.log('Vishnu'+' '+'Vardhan')
console.log('Vishnu'+' Vardhan')

console.log('vishnu'.concat(' ','Vardhan'))

//substring

console.log('Vishnu is good') 