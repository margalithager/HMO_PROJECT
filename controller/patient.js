const db=require('../model/index') ;
const Patient = require('../model/patient.model');
const patient=db.patient;

// Add someone to the patient table
function AddPatient(req,res)
{
    let personToadd=req.body ;
    console.log(personToadd);
        patient.create(personToadd)
        .then((obj)=>{res.send(obj)})
        .catch((err)=>{res.status(500).send(err)})

}


//Get a patient by his id
async function GetById(req, res) {
    let personId = req.params.patientId;
    try {
      let data = await patient
      .findOne({ "patientId": personId });
      if (data==null) {
        res
        .status(400)
        .send("פצינט לא קיים");
      } else {
        res
        .send(data);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  

//Get all the  patients
async function GetAll (req,res)
{ 
    try
    {
        let data =await patient.find()
        res.send(data);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}


module.exports={AddPatient,GetById,GetAll};