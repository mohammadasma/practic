let express=require("express")

let app=express();
let mysql2=require("mysql2");


  let conn=mysql2.createConnection({
      host:"localhost",
      user:"root",
      password:"123456",
      database:"employe"
})
conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected to mysql database")
    }
})

app.get("/",(req,res)=>{

    res.send("hello")
})
 let port=3005;

app.listen(port,()=>{

    console.log(`port connected:${port}`)
})