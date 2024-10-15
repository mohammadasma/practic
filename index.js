let express=require("express")

let app=express();
let mysql2=require("mysql2");
require("dotenv").config();
 


  let conn=mysql2.createConnection({
      host:process.env.host,
      user:process.env.user,
      password:process.env.password,
      database:process.env.database
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
 let port=process.env.port;


app.listen(port,()=>{

    console.log(`port connected:${port}`)
})