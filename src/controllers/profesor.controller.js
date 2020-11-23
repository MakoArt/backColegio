const profesorController={}
const {profesor}=require('../database')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')





//REGISTRAR PROFESOR 

profesorController.registrar=async(req,res)=>{

    const{nombre,apellido,asignatura,correo,contrasena}=req.body
    
     const correoProfesor=await profesor.findOne({where:{correo:correo}})

     if(correoProfesor){
         await res.json({
             mensaje:'el correo ya existe'
         })
     }else{

        const nuevoProfesor=await profesor.create({
             
              nombre:nombre,
              apellido:apellido,
              asignatura:asignatura,
              correo:correo,
              contrasena:contrasena
        })
        nuevoProfesor.contrasena=await bcrypt.hash(contrasena,10)
        const token=jwt.sign({_id:nuevoProfesor._id},'secreta')
        await nuevoProfesor.save()

        res.json({
            mensaje:'bienvenido',
            nombre:nuevoProfesor.nombre,
            token
        })



     }

}



//ENTRAR PROFESOR (LOGIN)

profesorController.entrar=async(req,res)=>{
    const{correo,contrasena}=req.body

    const Profesor=await profesor.findOne({where:{correo:correo}})

    if(!Profesor){
        return res.json({
            mensaje:'correo incorrecto'
        })
    }
    const coincide=await bcrypt.compare(contrasena,Profesor.contrasena)

    if(coincide){
        const token=jwt.sign({_id:Profesor._id},'secreta')

        await res.json({
            mensaje:'bienvenido/a',
            id:Profesor._id,
            token
        })

    }else{
        await res.json({
            mensaje:'contraseña incorrecta'
        })
    }
    }
    module.exports=profesorController



