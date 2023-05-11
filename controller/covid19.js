const db=require('../model/index');
const sick=db.Sick;
const patient=db.patient;

//Adding a patient to the corona table
async function AddSick(req, res) {
    const personToadd = req.body;
    if (personToadd.recoveryDate!=null)
          if(personToadd.recoveryDate<personToadd.dateOfPositive)
          {
          res
          .status(400)
          .send("The date of recovery must be after the date of illness");
        }
    const patientExists = await patient
    .findOne({ patientId: personToadd.patientId });
    if (!(patientExists==null)) {
        sick.create(personToadd)
       .then((obj) => {
        res.send(obj);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
      
    }
    else
    return res
           .status(400)
           .send("Patient not exists");
  }
  
//Sick retrieval by ID 
async function GetById(req, res) {
    let personId = req.params.patientId;
    try {
      let data = await sick
                      .findOne({ "patientId":personId });
      if (data==null) {
        res.status(400).send("פצינט לא קיים");
      } else {
          res.send(data);
      }
    } catch (err) {
        res.status(500).send(err);
    }
  }


//Retrieving all sick
async function GetAll (req,res)
{ 
    try
    {
        let data =await sick.find()
        res.send(data);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}



module.exports={AddSick,GetById,GetAll};