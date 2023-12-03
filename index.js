// const arr = [4,5,7,8,4,2,6];

// const res = arr.filter((item)=>{
//     return item>4;
// })

// console.warn(res);

// const res = arr.map((item)=>{
//     return item>4;
// })

// console.warn(res);

// arr.forEach((item)=>{
//     console.log(item>4);
// })

// for (const key in arr) {
//     console.warn(key>4);
// }

// let promish = new Promise((resolve,reject)=>{
//     resolve(b = 100);
// }).then((b)=>{
//     setTimeout(()=>{
//         console.log(a+b);
//     },2000)
// })

// ****************EXPRESS JS ******************

// const express = require('express');
// const path = require('path');

// const app = express();

// app.get("",(req,res)=>{
//     res.send("<h1>This is HOME PAGE</h1>");
// })

// app.get("/about",(req,res)=>{
//     res.send("<h1>This is About PAGE</h1>")
// })

// app.listen(3000);

// ******************************************

// app.get("",(req,res)=>{
//     console.log(req.query);
//     res.send(`<h1>Hello My Name Is : ${req.query.name} </h1>`);
// }).listen(3000);

// ******************** Static WEB PAGE *********************

// const dirpath = path.join(__dirname,'pages');

// app.use(express.static(dirpath));

// app.listen(3000);

// *********************** SEND FILE as WEB PAGE ******************

// const dirpath = path.join(__dirname,'pages');

// app.get("",(_,res)=>{
//     res.sendFile(`${dirpath}/home.html`);
// })

// app.get("/about",(_,res)=>{
//     res.sendFile(`${dirpath}/about.html`);
// })

// app.get("*",(_,res)=>{
//     res.sendFile(`${dirpath}/error.html`);
// })

// app.listen(3000);

// ********************** ejs Template Engine ***************************

// app.set('view engine','ejs');

// app.get("/profile",(_,res)=>{
//     const user = {
//         name:"Avneesh",
//         email:"avnishled97@gmail.com",
//         skill :['python','Django','React','Node','HTML','CSS']
//     }
//     res.render("profile",{user});
// }).listen(5000);

// ****************************************************************

// app.set('view engine','ejs')

// app.get("",(_,res)=>{
//     res.render("home");
// })

// app.get("/about",(_,res)=>{
//     res.render("About");
// })

// app.listen(5000);

// **************** MiddleWares *********************************

// const queryFilter = ((req,res,next)=>{
//     const age = req.query.age;
//     if(!age){
//         res.send("Enter Age");
//         next()
//     } else if(age<18){
//         res.send("Age Should be greater then 18");
//     }else if(age > 100){
//         res.send("Enter Valid Age");
//     }
//     else{
//         next()
//     }

// })

// app.use(queryFilter);

// app.get("",(req,res)=>{
//     res.send("<h1>This is Home Page</>")
// })

// app.get("/about",(req,res)=>{
//     res.send("<h1>This is About Page</>")
// })

// app.listen(5000);

// **************************** Single Route Middleware **************************************

// const queryFilter = ((req,res,next)=>{
//     const age = req.query.age;
//     if(!age){
//         res.send("Enter Age");
//         next()
//     } else if(age<18){
//         res.send("Age Should be greater then 18");
//     }else if(age > 100){
//         res.send("Enter Valid Age");
//     }
//     else{
//         next()
//     }

// })

// app.get("",queryFilter,(req,res)=>{
//     res.send("<h1>This is Home Page</>")
// })

// app.get("/about",(req,res)=>{
//     res.send("<h1>This is About Page</>")
// })

// app.listen(5000);

// *************** Middlleware for group of Routes **********************

// const route = express.Router()
// const queryFilter = require("./middleware");

// route.use(queryFilter);

// app.use('/',route);

// app.get("",(req,res)=>{
//     res.send("This is Home PAge");
// })

// route.get("/about",(req,res)=>{
//     res.send("This is About Page");
// })

// route.get("/contact",(req,res)=>{
//     res.send("This is Contact Page");
// })

// app.listen(5000);

// ********************** Mongo DB **********************************

// const {MongoClient} = require('mongodb');

// const url = "mongodb://localhost:27017";

// const client = new MongoClient(url);

// const getData = async () =>{

//     const conn = await client.connect();
//     const db = conn.db('mydatabase');
//     const collection = db.collection('Emp');
//     const data = await collection.find({}).toArray();
//     console.log(data);
// }

// getData()

// *********** Import DB code *******************************

// const dbConnect = require('./dbConnect');

// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data);
//     })
// })

// const getData = async () =>{
//     const resp = await dbConnect();
//     const data = await resp.find({}).toArray()
//     console.warn(data);
// }

// getData()

// ***************** Insert DATA ************************************

// const getConnect = require("./dbConnect");

// const insertData = async () =>{

//     const db = await getConnect();
//     const data = [
//         {
//             name:"Avneesh Kumar Verma",
//             age:24
//         },
//         {
//             name:"Mini",
//             age:28
//         }
//     ]
//     // const res = await db.insertOne({name:"AV"});
//     const res = await db.insertMany(data);
//     if(res.acknowledged){
//         console.warn("Data Inserted Succesfully");
//     }
// }

// insertData()

// ******************** Update Data ************************

// const dbConnect = require("./dbConnect");

// const updateData = async () =>{

//     const db = await dbConnect();

//     // *************** Update One*******************
//     // const res = await db.updateOne({name:"Avneesh Kumar Verma"},{$set:{name:"Av"}});

//     // ******************** Update Many*********

//     const res = await db.updateMany({name:"Av"},{$set:{name:"Avneesh Kumar Verma"}});
//     if(res.acknowledged){
//         console.log("Record Updated");
//     }
// }

// updateData()

// ******************* Delete Record *******************

// const dbConnect = require("./dbConnect");

// const delRecond = async () =>{

//     const db = await dbConnect();

//     // **************** Delete One ****************
//     // const res = await db.deleteOne({name:"Avneesh Kumar Verma"})

//     // ******************* Delete Many ************

//     const res = db.deleteMany({name:"AV"});
//     if(res.acknowledged){
//         console.warn("Record Deleted");
//     }
// }

// delRecond()

// ************* API Using Mongo DB **********************

// const express = require("express");
// const dbConnect = require("./dbConnect");
// const mongoDb = require("mongodb");

// const app = express();
// app.use(express.json());

// //  ********************* get Data ********************

// app.get("", async (req, res) => {
//   const resp = await dbConnect();
//   const data = await resp.find({}).toArray();
//   res.send(data);
// });


// // ***************************post Data ************************

// app.post("", async (req, res) => {
//   const db = await dbConnect();
//   const data = req.body;
//   const result = await db.insertOne(data);
//   res.send(result);
// });

// // ********************  Put Data *************************************

// app.put("/:name", async (req, res) => {
//   const db = await dbConnect();
//   const data = req.body;
//   app.use(express.json());
//   const result = await db.updateOne({name:req.params.name}, { $set: data });
//   res.send(result);
// });



// // ************************ delete Data*************************************

// app.delete("/:id", async (req,res)=>{
//     const db = await dbConnect();
//     const data_id = new mongoDb.ObjectId(req.params.id);
//     const result = await db.deleteOne({_id: data_id});
//     res.send(result);
// })



// app.listen(5000);






// ******************** Mongoose ***********************


// const mongoose = require("mongoose");

// const main = async () =>{
//     await mongoose.connect("mongodb://localhost:27017/mydatabase");
//     const EmpSchema = mongoose.Schema({
//         name:String,
//         age:Number
//     });
//     const EmpModel = new mongoose.model("stus",EmpSchema);
//     const data = new EmpModel({name:"Avneesh Kumar Verma",age:24});
//     const res = await data.save()
//     console.warn(res);

// }

// main()




// ******************* CRUD in Mongoose ********************************


// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/mydatabase");

// const stuSchema = new mongoose.Schema({
//     name:String,
//     age:Number,
//     address:String
// });




// const insertData = async () =>{
//     const stuModel = mongoose.model("stus",stuSchema);
//     const data = new stuModel({name:"Avneesh",age:24,address:"Haridwar"});
//     const res = await data.save()
//     console.log(res);

// }

// insertData()



// const readData = async () =>{
//     const stuModel = mongoose.model("stus",stuSchema);
//     const data = await stuModel.find({})
//     console.warn(data)
// }

// readData()



// const updateData = async () =>{
//     const stuModel = mongoose.model("stus",stuSchema);
//     const data = await stuModel.updateOne({name:"Avneesh"},{$set:{name:"Avneesh Kumar"}})
//     console.warn(data)
// }

// updateData()



// const deleteData = async () =>{
//     const stuModel = mongoose.model("stus",stuSchema);
//     const res = await stuModel.deleteOne({name:"Avneesh Kumar"});
//     console.warn(res);
// }

// deleteData()




// ******************* Api using Mongoose *************************


// const express = require("express");
// const StuModel = require("./StuModel");

// const app = express();
// app.use(express.json());


// // ************ POST API ********************

// app.post("", async (req,res)=>{
//     const data = new StuModel(req.body);
//     const result = await data.save();
//     res.send(result);
//     console.log(result);
// })



// // *********************** Put API ************************

// app.put("/update/:_id", async (req,res)=>{
//     const data = await StuModel.updateOne(
//         req.params,
//         {$set:req.body}
//     )
//     res.send(data);
// })


// // ******************** delete API *****************

// app.delete("/del/:_id",async (req,res)=>{
//     const data = await StuModel.deleteOne(req.params);
//     console.log(req.params)
//     res.send(data)
// })



// // *******************get API ***********************


// app.get("/", async (req,res)=>{
//     const data = await StuModel.find();
//     res.send(data);
// })


// // -----------------------------------------------------------------

// app.get("/:key", async (req,res)=>{
//     const data = await StuModel.find(
//         {
//             "$or":[
//                 {"name":{$regex:req.params.key}},
//                 {"address":{$regex:req.params.key}}
//             ]
//         }
//     );
//     res.send(data);
// })


// app.listen(5000);





// *************** Upload File Using API (Multer Module) *************

// const express = require("express");
// const multer = require("multer");
// const app = express();

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: (req,file,cb)=>{
//             cb(null,"upload");
//         },
//         filename: (req,file,cb)=>{
//             cb(null,file.fieldname + "-" + Date.now() + ".jpg");
//         }
//     })
// }).single("user_file");


// app.post("",upload,(req,resp)=>{
//     resp.send("upload");
//     console.warn(upload);
// })

// app.listen(5000);



// *********************** Event Emitter ***********************

// const express = require("express");
// const EventEmmiter = require("events");
// const app = express();

// const event = new EventEmmiter();

// let count = 0;

// event.on("countAPI",()=>{
//     count++;
//     console.warn("Api Result",count);
// })

// app.get("",(req,res)=>{
//     res.send("Home Api");
//     event.emit("countAPI");
// })

// app.get("/add",(req,res)=>{
//     res.send("Add API");
//     event.emit("countAPI");

// })

// app.get("/search",(req,res)=>{
//     res.send("Search API");
//     event.emit("countAPI");

// })

// app.get("/del",(req,res)=>{
//     res.send("Delete API")
//     event.emit("countAPI");

// })

// app.listen(5000);




// ************************ MySql DataBase ********************************

// const mysql = require("mysql2");

// const conn = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"root123",
//     database:"av",
//     insecureAuth:true
// })


// conn.connect((err)=>{
//     if(err){
//         console.warn(err)
//     }else{
//         console.warn("Connected.!!!!")
//     }
// })

// conn.query("select * from customer",(err,res)=>{
//     console.log(res);
// })




//  *********************** API using Mysql DATABASE *************************


const conn = require("./mySqlConfig");
const express = require("express");

const app = express();

app.use(express.json());

app.get("",(req,res)=>{
    conn.query("select * from customer",(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})


app.post("/add",(req,res)=>{
    const data = req.body;
    conn.query("insert into customer SET ?",data,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result)
        };
    })
})


app.put("/update/:id",(req,res)=>{
    const data = [req.body.name,req.params.id];
    conn.query("update customer SET name=? where id=?",data,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})


app.delete("/del/:id",(req,res)=>{
    conn.query("delete from customer where id=?",req.params.id,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})


app.listen(5000);