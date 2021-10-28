// 把N个Promise串接起来

function waitOneSec(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(val);
            resolve();
        }, 1000);
    })
}

// // for loop
// const count = 3;
// let results = [];
// results[0] = waitOneSec(0);

// for (let i = 1;i < count;i++) {
//     results[i] = results[i - 1].then(() => waitOneSec(i));
// }

// async/await
const count = 3;
(async function () {
    for (let i = 0;i < count;i++) {
        await waitOneSec(i);
    }
})()