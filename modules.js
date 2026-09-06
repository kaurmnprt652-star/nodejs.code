const fs =  require('fs');
let text=fs.readFileSync('text.txt', 'utf-8');
text=text.replace("hello", "Rohan");

console.log("The content of the file is:");
console.log(text);

console.log("creating a new file...")
fs.writeFileSync('rohan.txt', text );