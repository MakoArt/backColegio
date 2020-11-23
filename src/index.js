const express=require('express')
const app=express()
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')


//puerto 

const port=process.env.PORT || 3000


//body-parser 

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//morgan

app.use(morgan('dev'))

//cors 

app.use(cors({origin:'*'}))

//rutas 

app.use('/alumnos',require('./routes/alumno.route'))
app.use('/profesores',require('./routes/profesor.route'))






app.listen(port,()=>console.log('servidor corriendo por el puerto',port))