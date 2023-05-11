const express=require('express')
const controllerSick=require('../controller/covid19')
const router=express.Router();

router.post("/",controllerSick.AddSick)
router.get("/:patientId",controllerSick.GetById);
router.get("/",controllerSick.GetAll);


module.exports=router;