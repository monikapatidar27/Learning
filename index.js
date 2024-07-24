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


// const express = require("express");
// const app = express();
 
// const port = 3000;
// app.get("/", (req, res) => {
//     res.send(`<div>
//     <h2>welcomw to the page</h2>
    
//   </div>`);
// });
// app.listen(port, () => {
//     console.log(`Listening to port ${port}`);
// });

// const getSum = (num1, num2) => {
//   const myPromise = new Promise((resolve, reject) => {
//     if (!isNaN(num1) && !isNaN(num2)) {
//       resolve(num1 + num2);
//     } else {
//       reject(new Error("Not a valid number"));
//     }
//   });

//   return myPromise;
// }

// console.log(getSum(10, 20));

// const express = require("express");
// const app = express();
// const axios = require("axios");

// app.post("/user", async (req, res) => {
//   try {
//     const payload = { name: "Aashita Iyer", email: "aashita.iyer@email.com" };
//     const response = await axios.post("http://httpbin.org/post", payload);
//     console.log(response.data);
//     res.status(200).json(response.data);
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// });

// app.listen(3000, function () {
//   console.log(`App listening at http://localhost:3000/`);
// });

// const fs = require('fs');
// const util = require('util');

// const readFile = util.promisify(fs.readFile);

// const read = async () => {
//   try {
//     const result = await readFile('file.txt');
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }
// };

// read();

const express = require("express");
const logger = require("./logger")
const app = express();

app.get("/event", (req, res, next) => {
  try {
    throw new Error("Not User!");
  } catch (error) {
    logger.error("Events Error: Unauthenticated user");
    res.status(500).send("Error!");
  }
});

app.listen(3000, () => {
  logger.info("Server Listening On Port 3000");
});