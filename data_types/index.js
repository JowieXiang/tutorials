// // 原始类型
// let a = 3;
// let b = a;
// a = 2;
// console.log(a);
// console.log(b);

// 对象
// let alice = { name: 'alice' };
// let bob = alice;
// alice.name = 'bob';
// console.log(alice);
// console.log(bob);

// let arr1 = new Array(1, 2, 3);
// let arr2 = arr1;
// arr1[0] = 2;
// console.log(arr1);
// console.log(arr2);

// // typeof
// console.log(typeof 'This is a string.');
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof 123);
// console.log(typeof false);
// console.log(typeof {});

// instanceof

const map = new Map();
const regExp = new RegExp();
const date = new Date();
// console.log(typeof map);
// console.log(typeof regExp);
// console.log(typeof date);
console.log(map instanceof Map);
console.log(regExp instanceof RegExp);
console.log(date instanceof Date);
