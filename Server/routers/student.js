import express from 'express'
const router = express.Router()
import { createstudent,updatestudent,getstudent, deletestudent } from '../controllers/student.js'

router.get("/student", getstudent )
router.post('/create',  createstudent)
router.put("/update", updatestudent)
router.delete('/delete/:adm',deletestudent)
export default router
