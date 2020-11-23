module.exports=(sequelize,type)=>{
    
    const Alumno=sequelize.define('alumnos',{
        nombre:{
            type:type.STRING
        },
        apellido1:{
            type:type.STRING
        },
        apellido2:{
            type:type.STRING
        },
        tutorLegal:{
            type:type.STRING
        },
        notaMedia:{
            type:type.INTEGER
        },
        observaciones:{
            type:type.STRING
        },
        correo:{
            type:type.STRING
        },
        contrasena:{
            type:type.STRING
        },
        telefono:{
            type:type.INTEGER
        },
        profesor:{
            type:type.INTEGER
        }

    },{

      timestamps:false
    })
    return Alumno
}