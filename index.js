let express=require("express")

let app=express();

app.get("/",(req,res)=>{

    res.send("hello")
})
 let port=3005;
 
app.listen(port,()=>{

    console.log(`port connected:${port}`)
})