// const { spawn } = require("child_process");
// const child = spawn("dir", ["D:\\empty"], { shell: true });

// child.stdout.on("data", (data) => {
//   console.log(`stdout ${data}`);
// });

// const lsProcess = spawn("ls");
// lsProcess.stdout.on("data",(data) => {
//     console.log(`stdout:\n${data}`);
// })
// lsProcess.stderr.on("data",(data) => {
//     console.log(`stdout:${data}`)
// })

// lsProcess.on("exit", (code) => {
//     console.log(`Process ended with ${code}`);
// });

// const cp = require('child_process');
// let child = cp.fork(__dirname+'/sub.js');
// child.on('message',((m)=>{
//     console.log("parent process recieved",m);
// }))
// child.send({ hello: 'from parent process' });

// child.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });

// console.log("number1");
// setImmediate(()=>{
//     console.log("number3");
// })
// setTimeout(()=>{
//     console.log("number4");
// })
// process.nextTick(() => {
//     console.log("number2");
// })
// const { Readable } = require('stream')
// const inStream = new Readable({
//     read() {

//     }
// })

// inStream.push("hello world");
// inStream.push("This is the testing")
// inStream.push(null);
// inStream.pipe(process.stdout);

// const { Writable } = require('stream');
// const outStream = new Writable({
//     write(chunk,encoding,callback){
//         console.log(chunk.toString());
//         callback();
//     }
// })
// process.stdin.pipe(outStream)

// console.time('fetchData');

// const fetchData = async () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Data fetched');
//         }, 2000);
//     });
// };

// fetchData().then(result => {
//     console.timeEnd('fetchData');
//     console.log(result)
// });

// const add = async (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };
// (async () => {
//     const startTime = Date.now();
//     const res = await add(2,3);
//     const endTime = Date.now();
//     const timeTaken = endTime - startTime;
//     console.log(`result ${res}`);
//     console.log(`time taken to provide the result ${timeTaken} ms.`)
// })();


const express = require("express");
const app = express();
 
const port = 3000;
app.get("/", (req, res) => {
    res.send(`<div>
    <h2>welcomw to the page</h2>
    
  </div>`);
});
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});