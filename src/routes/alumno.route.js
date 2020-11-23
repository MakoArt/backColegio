const{Router}=require('express')
const router=Router()
const alumnoCtr=require('../controllers/alumno.controller')
const Auth=require('../helpers/Auth')



router.get('/listar',Auth.verificarToken,alumnoCtr.listar)
router.get('/listarId/:id',Auth.verificarToken,alumnoCtr.listarId)
router.get('/alumnos_profesor/:id',Auth.verificarToken,alumnoCtr.alumnosDeProfesor)
router.delete('/eliminar/:id',Auth.verificarToken,alumnoCtr.eliminar)
router.put('/actualizar/:id',Auth.verificarToken,alumnoCtr.actualizar)
router.get('/buscar_nombre/:id',Auth.verificarToken,alumnoCtr.buscarAlumno)

module.exports=router