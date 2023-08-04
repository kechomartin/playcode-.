// console.log with an object 
let user = {
    name: 'Jack',
    contact: {
    email: 'j@ck@gmail.com',
    phone: '+1 909 0000000'
}
}
console.log(user)
console.log({user})

// time and console.log 
// start and end a timer with console.log in 2seconds

console.time()
setTimeOut(() =>{
    console.timeEnd()
}, 2000)

// we can also do a stack trace (stack backtrace),
// Programmers use this during debugging , you cna read more about it on wikipedia .

function one(){
    two()
}
function two(){
    three()
}
function three(){
    console.trace()
}
one()

// these functions call each other .

// console.log and tables 
// your can print out tables with console.log

let devices = [{
    name: 'samsung',
    brand: 'skmmc'
},
{
    name: 'Iphone6s',
    brans:'Apple'
}
]
// now just add 
console.table()
// If we only want the brands , just 
console.table(devices,['brand'])

// we can achieve the same result using the json placeholder

async function getUsers(){
    let response = await fetch('')
    let data = await response.json()

    console.table(data, ['name', 'email'])
}

getUsers()

// we can also use it in styling ;
// like so ;
console.log('%c This is a red text on a black background','color:red; background-color:black')

// you can use this to make logs stand out.