var moment = require('moment'); // require

const express = require('express');
const cors = require('cors');
const {json} =  require('express');
const routes = require('./routes')
var mysql = require('mysql');

var cron = require('node-cron');


const funciones = require('./models/index')

const app = express();

const configDb = require ('./config/db.config.js');
const { response } = require('express');

var corsOptions={
    origin : "*"
};

const sdk = require('api')('@activecampaign/v3#61g32ml76em4eb');


app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}))






app.get("/", (req,res)=>{
    res.json({msg:"Bienvenido a la app de Pagos"})
});







app.post("/enviarData", (req,res)=>{
    console.log(req.query)  
    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Api-Token': 'be1651cf7eb5d3e89de104d71cc3de33cd91ca6cbb085b346bee78b680551cc42e533e18'
        },
        body: JSON.stringify(
            {
                contact: {
                    firstName: req.query.nombre, 
                    phone: req.query.telefono,
                    email: req.query.email,
                    orgname: 'Landing page todos los servicios',
                    servicio_de_inters: req.query.zona,     
                    orgid: "Landing page faciales",

                
                }
        })
      };
      
      fetch('https://mxnycorp.api-us1.com/api/3/contacts', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            const idContact = response.contact.id
            let lista = 0
            if(req.query.landing =='landing1'){
                lista = 6
            } else if(req.query.landing =='landing2'){
                lista = 8
            }
            

            const optionsLista = {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Api-Token': 'be1651cf7eb5d3e89de104d71cc3de33cd91ca6cbb085b346bee78b680551cc42e533e18'
                },
                body: JSON.stringify(
                    {
                        
                        contactList: {
                            list: lista,
                            contact: idContact,
                            status: 1
                            }
                })
              };
            fetch('https://mxnycorp.api-us1.com/api/3/contactLists', optionsLista)
            .then(response => {
                response.json()
                console.log("respuesta --> ", response)
            })
            .catch(err => console.error(err));


            const datosPersonalizados = {
                method: 'PUT',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Api-Token': 'be1651cf7eb5d3e89de104d71cc3de33cd91ca6cbb085b346bee78b680551cc42e533e18'
                },

                body: JSON.stringify(
                    {            
                        contact:{
                            fieldValues:[
                                {
                                field:"36",
                                value: req.query.zona,
                                contact: idContact,
                                },
                                {
                                    field:"30",
                                    value: req.query.source,
                                    contact: idContact,
                                },
                                {
                                    field:"31",
                                    value: req.query.medium,
                                    contact: idContact,                                
                                },
                                {
                                    field:"32",
                                    value: req.query.campaign,
                                    contact: idContact,
                                }
                            ]
                        }            
                        
                })
              };
            fetch('https://mxnycorp.api-us1.com/api/3/contacts/'+idContact, datosPersonalizados)
            .then(response => {
                response.json()
                console.log("respuesta 2 ---> ",response )
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));


        res.json({valido:1, msg:response})
        
});

     

//Rutas
app.use("/api", routes)





cron.schedule('*/2 * * * *', () => {
    /*
    let hoy = moment().toDate()
    console.log(hoy)
    const optionsLista = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Api-Token': 'be1651cf7eb5d3e89de104d71cc3de33cd91ca6cbb085b346bee78b680551cc42e533e18'
        },
      };
    fetch('https://mxnycorp.api-us1.com/api/3/contacts?status=-1&filters[updated_after]='+hoy+'&orders[email]=ASC', optionsLista)
    .then(response => response.json())
    .then(response =>{
        console.log(response.contacts.length)
    })
    .catch(err => console.error(err));
    */
});



const PORT = 3000;

app.listen(PORT,  () => {
    console.log("Servidor corriendo en el puert " ,PORT)
});