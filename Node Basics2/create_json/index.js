const fs = require('fs');

const data = {
    name:"Avneesh",
    age:24,
    address:"Haridwar"
}

// const json_data = JSON.stringify(data);
// console.log(json_data);

// fs.writeFile("json_data.json",json_data,(err)=>{
//     console.log(err);
// })


fs.readFile("json_data.json","utf-8",(err,data)=>{
    console.log(data);
    const mydata = JSON.parse(data);
    console.log(mydata);
})