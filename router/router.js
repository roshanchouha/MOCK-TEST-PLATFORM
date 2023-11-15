 import { Router } from "express";
import * as controller from "../controllers/controller.js";
 const router = Router();


router.get('/question',controller.getQuestions)
router.post('/question',controller.postQuestion)
router.delete('/question',controller.deleteQuestion)
router.route('/result').get(controller.getResult).post(controller.postResult).delete(controller.deleteResult)

 export default router;
