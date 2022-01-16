"use strict";
// ************************************ Basic Types in TypeScript *******************************************
let str;
let bool;
let num;
let strArray;
let tuple;
let dictionary;
let numSet;
str = 'Hello';
bool = true;
num = 123;
strArray = ['Hello', 'World'];
tuple = [123, 'Hello'];
dictionary = { 1: 'Hello', 2: 'World' };
numSet = new Set([1, 2, 3]);
// *********************************************************************************************************
// ************************************ Strings in TypeScript **********************************************
let str1;
str1 = 'ABC';
str1 = '123';
str1 = 'ABC = 123';
str1 = 'Quick brown fox jumps over the lazy dog';
// Can use escape characters in strings as well.
// str1 = 'It wasn\'t me';
str1 = "It wasn't me";
str1 = `${str} World!`;
console.log(str1);
// *********************************************************************************************************
// ************************************ Booleans in TypeScript *********************************************
let bool1;
bool1 = true;
bool1 = false;
let str2;
str2 = 'ABC';
bool1 = str2 === 'ABC';
let bool2 = 'abc'.endsWith('b');
console.log(bool1, bool2);
// *********************************************************************************************************
// ************************************ Numbers in TypeScript ***********************************************
let num1;
num1 = 123; // decimal
num1 = 123.456; // decimal
num1 = 0x123; // hexadecimal
num1 = 0b101; // binary
num1 = 0o123; // octal
console.log(num1);
// Read in base of choice
console.log('0o' + num1.toString(8));
// *********************************************************************************************************
// ************************************ Arrays in TypeScript ***********************************************
let strArray1;
strArray1 = ['a', 'b', 'c'];
let numArray;
numArray = [1, 2, 3, 4];
let boolArray;
boolArray = [true, false, true];
let mixedArray;
mixedArray = [1, 'a', 'b', 2, 3];
let unknownArray;
unknownArray = [1, 'a', true, ['even', 'another', 'internal', 'array']];
console.log(strArray1[0]);
console.log(numArray[1]);
console.log(boolArray[2]);
console.log(mixedArray[0]);
console.log(unknownArray[3]);
let anyArray = [1, 'a', 'b', 2, 3];
console.log(anyArray);
// Or you can use unknown type for arrays
// let anyArray: unknown[] = [];
console.log(anyArray.length);
console.log(anyArray.pop()); // removes last element from array and returns it
console.log(anyArray);
console.log();
console.log(anyArray.shift()); // removes first element from array and returns array
console.log(anyArray);
console.log(anyArray.unshift(100)); // adds element to the beginning of array
console.log(anyArray);
console.log(anyArray.push('a')); // adds element to the end of array
console.log(anyArray);
console.log(anyArray.splice(1, 2)); // removes element from array and returns removed elements
console.log(anyArray);
console.log(anyArray.lastIndexOf('a')); // returns index of last occurence of element
// *********************************************************************************************************
// ************************************ Dictionaries in TypeScript *****************************************
let dictionary1;
dictionary1 = { 123: 'abc', 456: 'def' };
let dictionary2;
dictionary2 = { abc: true, def: false, ghi: true };
console.log(dictionary1[123]);
console.log(dictionary2['def']);
// The key of a dictionary can be any type and name
let dictionary3;
let dictionary4;
dictionary3 = { a: 'car', b: 'bike', c: 'boat', d: 'plane' };
dictionary4 = { 1: 'car', 2: 'bike', 3: 'boat', 4: 'plane' };
// Can be retrieved as such
console.log(dictionary3['a']);
console.log(dictionary4[2]);
// Since Dictionaries are really just objects. You can also retrieve a dictionary's value using object notation if the keys are strings.
console.log(dictionary3.c);
console.log(dictionary3['c']);
// console.log(dictionary4.2); // Will throw an error when the key is not a string (in this case a number)
// You can add new item to a dictionary using object notation
dictionary3['e'] = 'helicopter';
dictionary3.f = 'go-kart';
console.log(dictionary3);
// You can also delete items from a dictionary using object notation
delete dictionary3.a;
delete dictionary3['b'];
delete dictionary4[1];
console.log(dictionary3);
console.log(dictionary4);
// The values of a dictionary can be any type, even an array or another dictionary or a mix of types
let dictionary5;
dictionary5 = { a: [1, 2, 3], b: [4, 5, 6], c: [7, 8, 9], d: [10, 11, 12] };
console.log(dictionary5);
let dictionary6;
dictionary6 = { a: 'car', b: 5, c: 1, d: 'plane', e: ['a', 'b', 'c'] };
console.log(dictionary6);
// Initialize empty dictionary
let dictionary7 = {};
dictionary7['a'] = true;
dictionary7['b'] = false;
// *********************************************************************************************************
// ************************************ Tuples in TypeScript ***********************************************
// The tuple is similar to an array, but you are explicitly indicating how many items are in the tuple and of which type they are when you instantiate it.
// The tuple type is not directly supported in JavaScript as a Tuple, but as array instead. The rules of the Tuple are enforced in TypeScript only when it is created.
// After the tuple is created it behaves the same as an array. You can add, remove, edit, and access items in the tuple.
let tuple1; // Only two items, number and string
tuple1 = [1, 'abc'];
let tuple2; // Only three items, number, string and boolean
tuple2 = [1, 'abc', true];
console.log(tuple1[1]);
console.log(tuple2[2]);
// *********************************************************************************************************
// ************************************ Sets in TypeScript *************************************************
let set1;
set1 = new Set([1, 2, 3, 4, 5]);
let set2;
set2 = new Set(['a', 'b', 'c', 'd', 'e']);
let set3;
set3 = new Set([
    1,
    'a',
    true,
    ['even', 'another', 'internal', 'array'],
]);
console.log(set1);
console.log(set2);
console.log(set3);
const set4 = new Set();
set4.add('cat');
set4.add('dog');
set4.add('bird');
console.log(set4);
set4.delete('cat');
set4.add('bird'); // Set will not add the same element twice
console.log(set4);
console.log(Array.from(set4)[0]);
