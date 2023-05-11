const express=require('express')
const controllerVaccine=require('../controller/vaccine')
const router=express.Router();

router.post("/",controllerVaccine.AddVaccine);
router.get("/:patientId",controllerVaccine.GetById);
router.get("/",controllerVaccine.GetAll);
module.exports=router;