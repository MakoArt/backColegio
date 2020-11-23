module.exports=(sequelize,type)=>{

    const Profesor=sequelize.define('profesores',{

             nombre:{
                 type:type.STRING
             },
             apellido:{
                 type:type.STRING
             },
             asignatura:{
                 type:type.STRING
             },
             correo:{
                 type:type.STRING
             },
             contrasena:{
                 type:type.STRING
             }

            },{

            timestamps:false

            })
            return Profesor

        }














