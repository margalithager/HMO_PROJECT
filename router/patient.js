const express=require('express')
const controllerPatient=require('../controller/patient')
const router=express.Router();

router.post("/",controllerPatient.AddPatient)
router.get("/:patientId",controllerPatient.GetById);
router.get("/",controllerPatient.GetAll);
module.exports=router;