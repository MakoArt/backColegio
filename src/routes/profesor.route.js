const {Router}=require('express')
const router=Router()
const profesorCtr=require('../controllers/profesor.controller')


router.post('/registrar',profesorCtr.registrar)
router.post('/entrar',profesorCtr.entrar)


module.exports=router