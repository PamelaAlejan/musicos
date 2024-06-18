import { Router } from 'express';
import { alwaysController } from "../controllers/always.controllers.js"

const router = Router()

//PATH /musicos

router.get('/', alwaysController.getStudents)
router.post('/', alwaysController.postMusicos)
router.put('/:rut', alwaysController.putMusicos)
router.delete('/:rut', alwaysController.deleteMusicos)
router.get('/:rut', alwaysController.consultaone)


export default router;
