const alumnoController={}
const {alumno}=require('../database')





alumnoController.listar=async(req,res)=>{

    await alumno.findAll()
    .then(alumnos=>{
        res.send(alumnos)
    })
}

alumnoController.listarId=async(req,res)=>{
    const ID=req.params.id 
    const respuesta=await alumno.findOne({where:{id:ID}})
    res.json(respuesta)
}


 alumnoController.alumnosDeProfesor=async(req,res)=>{

    const IDPROF=req.params.id
    const respuesta=await alumno.findAll({where:{profesor:IDPROF}})
    res.json(respuesta)
 }


alumnoController.eliminar=async(req,res)=>{
    const ID=req.params.id
    await alumno.destroy({where:{id:ID}})
    .then(()=>res.json({mensaje:'alumno eliminado'}))
    .catch(error=>res.json(error))

}

alumnoController.actualizar=async(req,res)=>{
   
    const ID=req.params.id
    const nuevo=req.body
    await alumno.findOne({where:{id:ID}})
    .then(alumno=>{alumno.update(nuevo)})
    .then(()=>res.json({mensaje:'actualizado'}))
    .catch(error=>res.json(error))

}

alumnoController.buscarAlumno=async(req,res)=>{
    const nombre=req.params.nombre
    const respuesta=await alumno.findAll({where:{nombre:nombre}})
    if(respuesta){
        res.json(respuesta)
    }else{
        res.json({mensaje:'no se encuentran alumnos con ese nombre'})
    }
}





module.exports=alumnoController