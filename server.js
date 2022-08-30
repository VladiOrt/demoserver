const express = require('express');
const cors = require('cors');
const {json} =  require('express');
const routes = require('./routes')
var mysql = require('mysql');


const funciones = require('./models/index')

const app = express();

const configDb = require ('./config/db.config.js');
const { response } = require('express');

var corsOptions={
    origin : "*"
};

const sdk = require('api')('@activecampaign/v3#61g32ml76em4eb');


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}))













/*





let crearTablaSucursal = "CREATE TABLE IF NOT EXISTS Sucursal ("+
    "idSucursal INT AUTO_INCREMENT PRIMARY KEY,"+
    "nombre VARCHAR(255) NOT NULL,"+
    "telefono VARCHAR(255) NOT NULL,"+
    "horario VARCHAR(255) NOT NULL,"+
    "marca VARCHAR(255) NOT NULL,"+
    "nombrePlaza VARCHAR(255) NOT NULL,"+
    "direccionPlaza VARCHAR(255) NOT NULL,"+
    "encargadoPlaza VARCHAR(255) NOT NULL,"+
    "numeroCabinas VARCHAR(255) NOT NULL,"+
    "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)" 

let crearTablaPuest = "CREATE TABLE IF NOT EXISTS puesto ("+
    "idPuesto INT AUTO_INCREMENT PRIMARY KEY,"+
    "puesto VARCHAR(255) NOT NULL,"+
    "descripcion TEXT,"+
    "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)" 

let crearTablaUsuarios = "CREATE TABLE IF NOT EXISTS usuarios ("+
    "idUsuarios INT AUTO_INCREMENT PRIMARY KEY,"+
    "Login VARCHAR(255) NOT NULL,"+
    "nombre VARCHAR(255) NOT NULL,"+
    "apellidoPaterno VARCHAR(255) NOT NULL,"+
    "apellidoMaterno VARCHAR(255) NOT NULL,"+
    "email VARCHAR(255) NOT NULL,"+
    "puesto VARCHAR(255) NOT NULL,"+
    "telefono VARCHAR(255) NOT NULL,"+
    "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)" 

let crearTablaPersonal = "CREATE TABLE IF NOT EXISTS personal ("+
    "idPersonal INT AUTO_INCREMENT PRIMARY KEY,"+
    "nombre VARCHAR(255) NOT NULL,"+
    "apellidoMaterno VARCHAR(255) NOT NULL,"+
    "apellidoPaterno VARCHAR(255) NOT NULL,"+
    "estatusMigratorio VARCHAR(255) NOT NULL,"+
    "esquemaPago VARCHAR(255) NOT NULL,"+
    "formaPago VARCHAR(255) NOT NULL,"+
    "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)" 
    
let crearTablaformaPago = "CREATE TABLE IF NOT EXISTS formaPago ("+
    "idformaPago INT AUTO_INCREMENT PRIMARY KEY,"+
    "description TEXT,"+
    "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)" 

let crearTablaPeriodoPago = "CREATE TABLE IF NOT EXISTS periodoPago ("+
    "idperiodoPago INT AUTO_INCREMENT PRIMARY KEY,"+
    "description TEXT,"+
    "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)" 








async function CrearTablas(){
    let tabla1 = await  funciones.ConsultarQuery(crearTablaSucursal)
    let tabla2 = await funciones.ConsultarQuery(crearTablaPuest)
    let tabla3 = await funciones.ConsultarQuery(crearTablaUsuarios)
    let tabla4 = await funciones.ConsultarQuery(crearTablaPersonal)
    let tabla5 = await funciones.ConsultarQuery(crearTablaformaPago)
    let tabla6 = await funciones.ConsultarQuery(crearTablaPeriodoPago)

}
CrearTablas()
*/



/* FIN DE CONEXION*/

//Ruta Simple

app.get("/", (req,res)=>{
    res.json({msg:"Bienvenido a la app de Pagos"})
});

app.post("/enviarData", (req,res)=>{
    console.log(req.body)

  


    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Api-Token': 'c95cdd96d4e0f990c4e706f0dc519789031fd7dcb4a679d1c14bc3c647018e84592c1904'
        },
        body: JSON.stringify(
            {
                contact: {
                    firstName: req.body.nombre, 
                    phone: req.body.telefono,
                    email: req.body.email,
                    orgname: 'Landing page todos los servicios',
                    servicio_de_inters: req.body.zona,     
                    orgid: "Landing page faciales",

                },fieldValues:[{
                    list: "6",
                    form: "1",
                    message: req.body.zona,
                    orgid: "Landing page faciales",
                }]
        })
      };
      
      fetch('https://mxnycorp.api-us1.com/api/3/contacts', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


        res.json({valido:1, msg:"Contacto Creado"})
        
});

     

//Rutas
//app.use("/api", routes)

const PORT = 8081;

app.listen(PORT,  () => {
    console.log("Servidor corriendo en el puert " ,PORT)
});