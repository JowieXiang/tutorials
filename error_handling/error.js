// 1.Error对象
// const err = new Error('one stupid bug');
// err.name = 'Stupid';
// console.log(err.name);
// console.log(err.message);
// console.log(err.stack);

// 2. throw 输出错误信息，终止程序
// throw err;
// throw 'random string';
// throw 123;

// 1. JS运行时自带的报错功能（错误检测功能）
// console.log(x);
// 2. 由外部的库提供的报错机制
// const fs = require('fs')
// const contents = fs.readFileSync(`${__dirname}/er.js`, { encoding: 'utf-8' });
// console.log(contents);
// 3. 手动抛出错误
// throw 'random string';'

// 3. try...catch 容许错误，并且报错，后面的代码继续执行

// try {
//     console.log(b);
// } catch (e) {
//     console.log(e);
// }
// console.log('后面的代码');

// 4. 异步编程，一般，功能都会为我们准备好接收（catch）错误的机制
const fs = require('fs')
// fs.readFile(`${__dirname}/er.js`, function (err, data) {
//     if (err) throw err;
//     console.log(data);
// })
// console.log('后面');


// 5. Promise异步编程，catch负责抓住错误
// try {
//     new Promise((resolve, reject) => {
//         fs.readFile(`${__dirname}/er.js`, function (err, data) {
//             if (err) reject(err);
//             resolve(data);
//         })
//     })
//     // .then((res) => {
//     //     console.log(res);
//     // })
//     // .catch((err) => {
//     //     console.log("catch: ", err);
//     // })
// } catch (e) {
//     console.log("error: ", e);
// }


// 6. async await

async function a() {
    try{
        await new Promise((resolve, reject) => {
            fs.readFile(`${__dirname}/er.js`, function (err, data) {
                if (err) reject(err);
                resolve(data);
            })
        })
    }catch(e){
        console.log("catch: ", e);
    }
}
