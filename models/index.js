
const {json} =  require('express');
var mysql = require('mysql');

const configDb = require ('../config/db.config.js')



const EjecutarQuery = async (Consulta) => {
        return new Promise(resolve =>{

        // Agregue las credenciales para acceder a su base de datos
        var connection = mysql.createConnection(configDb); 
        // conectarse a mysql

        /*CONCEXION A MYSQL */
        connection.connect(function(err) {
            if(err){
                console.log(err);        
                console.log(err.fatal);
            }else{
                console.log("conectado a BD")
            }
        });



        
        setTimeout(()=>{            
            $query = Consulta;
            connection.query($query, function(err, rows, fields) {
            if(err){
                resolve("Ocurrio un error en la consulta" + err, err);
            }
            
            connection.end(function(err){ console.log("Conexion terminada")})
            resolve(rows);                
            
            });
        }, 2000);


    })
}



const ConsultarQuery = async (consulta, res) => {
        try{
            const respuesta = await EjecutarQuery(consulta);
            return (respuesta)
        }
        catch(err){
          console.log(err)
        }
}



    module.exports = {
        ConsultarQuery
    }
