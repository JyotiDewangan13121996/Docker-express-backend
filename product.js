var express = require("express")

var db = require("./db")
var utils = require("./utils")


var router = express.Router()

router.get('/' , (request , response)=>{

    var connection = db.connect()
    var statement = `select * from product`

    connection.query( statement , (error , data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    } )
} )

router.post('/' , (request , response)=>{

    const { id , name ,title} = request.body 
    var statement = `insert into product  values ( ${id} , '${name}' , '${title}' )  `

    connection.query( statement , (error , data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    } )
} )

module.exports = router ;