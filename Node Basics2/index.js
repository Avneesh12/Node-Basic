// console.log("This is 1st Program");


// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);

// *****************************************************************************************************************


// Create File

// const fs = require("fs");

// fs.writeFileSync("file1.txt","This is First File");

// fs.appendFileSync("file1.txt"," This is Append Code");

// const buf_data = fs.readFileSync("file1.txt");

// console.log(buf_data);

// const my_data = buf_data.toString();

// console.log(my_data);


// fs.renameSync("file1.txt","read_write_file.txt");


// *****************************************************************************************************************


// CRUD Operation

// const fs = require("fs");

// fs.mkdirSync('crud');

// fs.writeFileSync("crud/file.txt","This is CRUD operation");

// fs.appendFileSync("crud/file.txt"," This is Append Text");

// const data = fs.readFileSync("crud/file.txt","utf-8");
// console.log(data);


// fs.renameSync("crud/file.txt","crud/crudfile.txt");

// fs.unlinkSync('crud/crudfile.txt');




// *****************************************************************************************************************

// console.log(__dirname);

console.log(__filename);
