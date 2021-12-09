// There are seven(7) kinds of data types out there in JavaScript

/* 
Data types(7):

primitive data types
1. number / numeric
2. string
3. boolean
4. undefined
5. null

7. symbol


non-primitive data type
6. object [note: An object gets multiple values, that's why.]
*/





// primitive is immutable

// a will change but b will not change. that's why it is called immutable value
let a = 'good';
let b = a;
console.log(a, b);
a = 'better';
console.log(a, b);



// non-primitive example

// its values will change, which is completely different than primitive
const x = { job: 'web developer' }
const y = x;
console.log(x, y);
// x.job='front end developer';
y.job = 'front end developer'
console.log(x, y);



// another example of primitive type
let p = 'JavaScript';
let q = p;
p = 'React';
console.log(q);


if ('2' === 2) {
    console.log('5')
} else {
    console.log('11')
}