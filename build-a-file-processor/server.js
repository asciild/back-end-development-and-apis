// Starter file — add your code here
const fs = require('fs');
//console.log(fs);
//const data = fs.readFile('assets/poem.txt', {encoding: 'utf8'}, (err, data)=>console.log(data));
//console.log(data);
// const fsPromises = require('fs/promises')
// async function main(){
//     const data = await fsPromises.readFile('assets/poem.txt', {encoding: 'utf8'})
//     console.log(data);
// }
// main();
// fs.writeFileSync('assets/output.txt', 'Hello, freeCodeCamp!');
// fs.appendFileSync('assets/output.txt', '\nThis backend development stuff is pretty neat!');
// console.log(fs.existsSync('assets/output.txt'));
// console.log(fs.readdirSync("assets"));
const buf = Buffer.from('Hello, Node!');
console.log(buf);
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2);