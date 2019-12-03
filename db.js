var mysql = require("mysql");

function connect()
{
 
    var connection  = mysql.createConnection(
        {
            host : '172.18.4.86',
            user : 'root' ,
            password : 'root' ,
            port : 9090 ,
            database : 'mydb'
        }
    );

    connection.connect();

    return connection;

}

module.exports = {
    connect : connect
}