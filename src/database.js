const Sequelize=require('sequelize')
const dotenv=require('dotenv').config()
const mysql=require('mysql2')

//requerimos modelos 

const AlumnoModel=require('./models/alumno.model')
const ProfesorModel=require('./models/profesor.model')

//base de datos 

const DBURL=`${process.env.URI}`

const sequelize= new Sequelize(DBURL)

const profesor=ProfesorModel(sequelize,Sequelize)
const alumno=AlumnoModel(sequelize,Sequelize)

sequelize.sync()
.then(()=>console.log('base de datos conectada'))
.catch(error=>console.log(error))

module.exports={
    profesor,
    alumno
}