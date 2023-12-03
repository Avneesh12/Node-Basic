const express = require("express");
const path = require("path");

const app = express();
app.use(express.json())
const multer = require("multer")

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))



const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage})


app.get("/",(req,res)=>{
    return res.render("home")
})

app.post("/upload",upload.single("myimg"),(req,res)=>{
    console.log(req.body);
    console.log(req.file)
    return res.redirect("/")
})

app.listen(3000);