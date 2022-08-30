

const funciones = require('../models/index')
const {json} =  require('express');


module.exports = {
    crearSucursal: async(req,res) =>{ 
        try{
            const {descripcion} = req.body;
            
            if(!descripcion)res.status(500).json({ok: false,msg: "Falta Descripcion"}) 
            
            let query = "INSERT INTO frecuenciaPago(description) VALUES( '"+descripcion+"')"; 

            async function consulta (QuerySucursal){
                let crearSucursal = await  funciones.ConsultarQuery(QuerySucursal)
            }
            let consultaRespuesta = await consulta(query)
            res.status(201).json({
                ok: true,
                msg: "Frecuencia de Pago Creada"
            })
        }catch(error){
            console.log(error);
        }
    },
    editarSucursal: async(req,res)=>{
        try{
            const {descripcion,id} = req.body;

            let query = "UPDATE frecuenciaPago set  description='"+descripcion+"' WHERE idSucursal='"+id+"'"; 
            async function consulta (QuerySucursal){
                let crearSucursal = await  funciones.ConsultarQuery(QuerySucursal)
                return crearSucursal;
            }
            let consultaRespuesta = await consulta(query)
            res.status(201).json({
                ok: true,
                msg: "frecuencia de Pago Editada"
            })
        }catch(error){
            console.log(error);
        }
    },
    listarSucursales: async(req,res)=>{
        try{
            const {id} = req.body;

            let query = "SELECT * FROM  frecuenciaPago "; 
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