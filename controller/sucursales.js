

const funciones = require('../models/index')
const {json} =  require('express');


module.exports = {
    crearSucursal: async(req,res) =>{ 
        try{
            const {
                nombre,
                telefono,  
                horario , 
                marca ,
                plaza ,
                encargado ,
                cabinas 
            } = req.body;

            console.log("datos recibidos -->", req.body)
            if(!nombre)res.status(500).json({ok: false,msg: "Falta Titulo"})
            if(!telefono)res.status(500).json({ok: false,msg: "Falta Telefono"})
            if(!horario)res.status(500).json({ok: false,msg: "Falta Descripcion"}) 
          


            let query = "INSERT INTO Sucursal(nombre,telefono,horario,marca,nombrePlaza,encargadoPlaza,numeroCabinas) VALUES( '"+
                        nombre+"','"+
                        telefono+"','"+
                        horario+"','"+
                        marca+"','"+
                        plaza+"','"+
                        encargado+"','"+
                        cabinas+"')"; 

            async function consulta (QuerySucursal){
                let crearSucursal = await  funciones.ConsultarQuery(QuerySucursal)
                console.log("1.-",crearSucursal)
            }
            let consultaRespuesta = await consulta(query)
            res.status(201).json({
                ok: true,
                msg: "Sucursal Creada"
            })
        }catch(error){
            console.log(error);
        }
    },
    editarSucursal: async(req,res)=>{
        try{
            const {
                nombre,
                telefono,  
                horario , 
                marca ,
                plaza ,
                encargado ,
                cabinas ,
                id
            } = req.body;
           
            let query = "UPDATE Sucursal set  nombre='"+nombre+
                        "', telefono='"+telefono+
                        "', horario='"+horario+
                        "', marca='"+marca+
                        "', plaza='"+plaza+
                        "', encargado='"+encargado+
                        "', cabinas='"+cabinas+
                        "' WHERE idSucursal='"+id+"'"; 


            async function consulta (QuerySucursal){
                let crearSucursal = await  funciones.ConsultarQuery(QuerySucursal)
                return crearSucursal;
            }
            let consultaRespuesta = await consulta(query)
            res.status(201).json({
                ok: true,
                msg: "Sucursal Editada"
            })
        }catch(error){
            console.log(error);
        }
    },
    listarSucursales: async(req,res)=>{
        try{

            let query = "SELECT * FROM  Sucursal "; 
            async function consulta (QuerySucursal){
                let crearSucursal = await  funciones.ConsultarQuery(QuerySucursal)
                return crearSucursal;
            }
            let consultaRespuesta = await consulta(query)
            console.log("-->",consultaRespuesta)
            res.status(201).json({
                ok: true,
                msg: "lista de Sucursales",
                data: consultaRespuesta
            })
        }catch(error){
            console.log(error);
        }
    },
    eliminarSucursal: async(req,res)=>{
        try{
            const {id} = req.body;

            let query = "DELETE FROM  Sucursal WHERE idSucursal='"+id+"'"; 
            async function consulta (QuerySucursal){
                let crearSucursal = await  funciones.ConsultarQuery(QuerySucursal)
                return crearSucursal;
            }
            let consultaRespuesta = await consulta(query)
            res.status(201).json({
                ok: true,
                msg: "Sucursal Eliminada"
            })
        }catch(error){
            console.log(error);
        }
    }
}