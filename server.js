var express=require("express"),
app=express();
app.use(express.static("public"));
app.get('/',function(req,res){
	res.sendFile('index.html',{root:__dirname+'/public/views'});
});
app.listen(1111,function(){
	console.log("The server started at 1111")
});