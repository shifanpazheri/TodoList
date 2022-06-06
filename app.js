const express =require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

console.log(date);

const app=express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items=[];
var workItem=[];

app.get("/",function(req,res){

  let day=date.getDate();
  console.log(day);

  res.render("list",{listTitle:day,addedNewItem:items});

});

app.post("/",function(req,res){
  //console.log(req.body.list);
  if(req.body.list==="Work List"){
    let wItem=req.body.item;
    workItem.push(wItem);
    res.redirect("/work");
  }else{
    let item=req.body.item;
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",addedNewItem:workItem});
});

app.get("/about",function(req,res){
  res.render("about");
})


app.listen(3000,function(){
  console.log("Server is running on port 3000!");
});
