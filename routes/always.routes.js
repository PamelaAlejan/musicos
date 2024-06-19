import { Router } from 'express';
import { alwaysController } from "../controllers/always.controllers.js"

const router = Router()

//PATH /musicos

router.get('/', alwaysController.getStudents) // consulta varios
router.post('/', alwaysController.postMusicos) // incluir
router.put('/:rut', alwaysController.putMusicos) // modificar
router.delete('/:rut', alwaysController.deleteMusicos) // eliminar
router.get('/:rut', alwaysController.consultaone) // consulta uno


export default router;
