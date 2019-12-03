var express  = require("express") ;
var bodyParser = require("body-parser")
var routerProduct = require("./product")

var app = express() ;

app.use( function(req , res , next){
    res.header("Access-Control-Allow-Origin","*") ;
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","Origin , X-Requested-With,Content-Type,Accept");
    next();
} )

app.use(bodyParser.json())
app.use("/product" , routerProduct)

app.get( "/" , (request, response)=>{
    response.send( "Welcome to my backend part !!") ; 

} ) ;


app.listen( 8000 , ()=>{
    console.log("Server started successfully at port 8080 !!");
} ) ;