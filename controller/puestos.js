

const funciones = require('../models/index')
const {json} =  require('express');


module.exports = {
    crearSucursal: async(req,res) =>{ 
        try{
            const {puesto, descripcion} = req.body;
           
            if(!puesto)res.status(500).json({ok: false,msg: "Falta Descripcion"})             
            if(!descripcion)res.status(500).json({ok: false,msg: "Falta Descripcion"}) 
            
            let query = "INSERT INTO Puesto(puesto,descripcion) VALUES( '"+puesto+"','"+descripcion+"')"; 

            async function consulta (QuerySucursal){
                let crearSucursal = await  funciones.ConsultarQuery(QuerySucursal)
            }
            let consultaRespuesta = await consulta(query)
            res.status(201).json({
                ok: true,
                msg: "Descripcion de puesto Creado"
            })
        }catch(error){
            console.log(error);
        }
    },
    editarSucursal: async(req,res)=>{
        try{
            const {puesto,descripcion,id} = req.body;

            let query = "UPDATE Puesto set puesto='"+puesto+"', descripcion='"+descripcion+"' WHERE idSucursal='"+id+"'"; 
            async function consulta (QuerySucursal){
                let crearSucursal = await  funciones.ConsultarQuery(QuerySucursal)
                return crearSucursal;
            }
            let consultaRespuesta = await consulta(query)
            res.status(201).json({
                ok: true,
                msg: "Puesto Editado"
            })
        }catch(error){
            console.log(error);
        }
    },
    listarSucursales: async(req,res)=>{
        try{
            const {id} = req.body;

            let query = "SELECT * FROM  Puesto "; 
            async function consulta (QuerySucursal){
                let crearSucursal = await  funciones.ConsultarQuery(QuerySucursal)
                return crearSucursal;
            }
            let consultaRespuesta = await consulta(query)
            res.status(201).json({
                ok: true,
                msg: "lista de frecuencias de pago",
                data: consultaRespuesta
            })
        }catch(error){
            console.log(error);
        }
    },
    eliminarSucursal: async(req,res)=>{
        try{
            const {id} = req.body;

            let query = "DELETE FROM  frecuenciaPago WHERE idfrecuenciaPago='"+id+"'"; 
            async function consulta (QuerySucursal){
                let crearSucursal = await  funciones.ConsultarQuery(QuerySucursal)
                return crearSucursal;
            }
            let consultaRespuesta = await consulta(query)
            res.status(201).json({
                ok: true,
                msg: "frecuencia de Pago Eliminada"
            })
        }catch(error){
            console.log(error);
        }
    }
}






