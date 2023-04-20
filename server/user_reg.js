const express=require('express');
const app=express();
const mysql=require('mysql');
const cor=require('cors');
app.use(cor());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images/')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  })
  const upload = multer({ storage: storage })

//--------------------DATABASE CONNECTION START-------------------------------------------------------------------------------------------
const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"gue"
})
//--------------------DATABASE CONNECTION END---------------------------------------------------------------------------------------------

//--------------------CUSTOMER REGISTRATION START------------------------------------------------------------------------------------------

app.post("/create",(req,res)=>{
    const nam=req.body.nam;
    const contact=req.body.contact;
    const address=req.body.address;
    const uname=req.body.uname;
    const pwd=req.body.pwd;
    db.query("INSERT INTO customer_login (name,contact,address,uname,pwd) VALUES (?,?,?,?,?)",[nam,contact,address,uname,pwd],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // res.send("Values Inserted");
            res.json({"result":"successfully"})
        }
    })
})
//--------------------CUSTOMER REGISTRATION END---------------------------------------------------------------------------------------

//--------------------LOGIN START-----------------------------------------------------------------------------------------------------
app.post("/login",(req,res)=>{
    const uname=req.body.uname;
    const pwd=req.body.pwd;
    db.query("SELECT * FROM customer_login where uname=? and pwd=?",[uname,pwd],(err,result)=>{
        if(result.length>0){
            console.log("Customer login successful");
            res.json({"result":1});
        }
        else{
           db.query("SELECT * FROM admin_login where uname=? and pwd=?",[uname,pwd],(err,result)=>{
                if(result.length>0){
                    console.log("Admin login successful");
                    res.json({"result":2});
                }
                else{
                    db.query("SELECT * FROM employee_login where uname=? and pwd=?",[uname,pwd],(err,result)=>{
                        if(result.length>0){
                            console.log("employee login successful");
                            res.json({"result":3});
                        }
                        else{
                            db.query("SELECT * FROM supplier_login where uname=? and pwd=?",[uname,pwd],(err,result)=>{
                                if(result.length>0){
                                    console.log("Supplier login successful");
                                    res.json({"result":4});
                                }
                                else{
                                    console.log("login not successful");
                                    res.json({"result":false})
                                }
                            })
                        }
                    }
                    )
                }
            })
        }
    })
})
//--------------------LOGIN END--------------------------------------------------------------------------------------------------

//--------------------ADD PRODUCTS BY ADMIN START---------------------------------------------------------------------------------
app.post("/addproduct", upload.single("file"),(req,res)=>{
    const pname=req.body.pname;
    const pdesc=req.body.pdesc;
    const pcat=req.body.pcat;
    const pqty=req.body.pqty;
    const pprice=req.body.pprice;
    const pimg=req.file.path;
    db.query("INSERT INTO prod_data VALUES (?,?,?,?,?,?,?)",[0,pname,pdesc,pcat,pqty,pprice,pimg],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("productsuccess");
            // res.json({"result":"successfully"})
        }
    })
})

//--------------------ADD PRODUCTS BY ADMIN END---------------------------------------------------------------------------------

//--------------------ADD MACHINE BY ADMIN START---------------------------------------------------------------------------------
app.post("/addmachine", (req,res)=>{
    const mn=req.body.mname;
    const ms=req.body.msupplier;
    const mq=req.body.mqty;
    const mp=req.body.mprice;
    db.query("INSERT INTO machine_data VALUES (?,?,?,?,?)",[0,mn,ms,mq,mp],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("machinesuccess");
        }
    })
})
//--------------------ADD MACHINE BY ADMIN END---------------------------------------------------------------------------------

//--------------------ADD CATEGORY BY ADMIN START---------------------------------------------------------------------------------
app.post("/addcategory", (req,res)=>{
    const cat=req.body.catname;
    db.query("INSERT INTO category_data VALUES (?,?)",[0,cat],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("categorysuccess");
        }
    })
})
//--------------------ADD CATEGORY BY ADMIN END---------------------------------------------------------------------------------

//--------------------ADD EMPLOYEE BY ADMIN START---------------------------------------------------------------------------------
app.post("/addemployee", (req,res)=>{
    const en=req.body.ename;
    const ec=req.body.contact;
    const em=req.body.mail;
    const ed=req.body.dept;
    const jd=req.body.joindate;
    const address=req.body.address;
    const euname=req.body.uname;
    const epwd=req.body.pwd;
    db.query("INSERT INTO employee_login VALUES (?,?,?,?,?,?,?,?,?)",[0,en,ec,em,ed,jd,address,euname,epwd],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("empregsuccess");
        }
    })
})
//--------------------ADD EMPLOYEE BY ADMIN END---------------------------------------------------------------------------------

//--------------------ADD SUPPLIER BY ADMIN START---------------------------------------------------------------------------------
app.post("/addsupplier", (req,res)=>{
    const en=req.body.ename;
    const ec=req.body.contact;
    const em=req.body.mail;
    const address=req.body.address;
    const euname=req.body.uname;
    const epwd=req.body.pwd;
    db.query("INSERT INTO supplier_login VALUES (?,?,?,?,?,?,?)",[0,en,ec,em,address,euname,epwd],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("supregsuccess");
        }
    })
})
//--------------------ADD SUPPLIER BY ADMIN END---------------------------------------------------------------------------------

//--------------------DISPLAY CATEGORY FROM DATABASE ON ADD PRODUCTS PAGE (ADMIN)----START---------------------------------------
app.get('/displaycategory',(req,res)=>{
    db.query("select * from category_data", (err,result)=>{
        if(err) throw err;
        if (result.length>0){
            //res.render("/Products",{'data':result});
            res.json(result);
        }
        else{
            res.send("No categories found");
        }
    })
})
//--------------------DISPLAY CATEGORY FROM DATABASE ON ADD PRODUCTS PAGE (ADMIN)----END------------------------------------------

//--------------------DISPLAY PRODUCTS FROM DATABASE ON CUSTOMER PROFILE PAGE--------START---------------------------------------
app.get('/displayproducts',(req,res)=>{
    db.query("select * from prod_data", (err,result)=>{
        if(err) throw err;
        if (result.length>0){
            res.json(result);
        }
        else{
            res.send("productempty");
        }
    })
})
//--------------------DISPLAY PRODUCTS FROM DATABASE ON CUSTOMER PROFILE PAGE--------END------------------------------------------

app.listen(9000,()=>{
    console.log("server running http://localhost:9000/")
})