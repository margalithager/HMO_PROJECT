const express =require('express');
const db=require('../model/index') ;
const vaccine=db.vaccine;
const patient=db.patient;

//Adding a patient to the vaccine table
async function AddVaccine(req, res) {
    const personToadd = req.body;
    const patientExists = await patient
    .findOne({ patientId: personToadd.patientId });
    if (!(patientExists==null)) {
        vaccine
        .create(personToadd)
        .then((obj) => {
         res.send(obj);
      })
        .catch((err) => {
         res
         .status(500)
         .send(err);
      });
      
    }
  
    else
    return res
    .status(400)
    .send("Patient not exists");
  }

//Retrieving all of a patient's corona vaccines by his ID 
async function GetById(req, res) {
    let personId = req.params.patientId;
    try {
      let data = await vaccine
      .find({ "patientId": personId });
      if (data.length==0) {
        res
        .status(400)
        .send("פצינט לא קיים");
      } else {
        res
        .send(data);
      }
    } catch (err) {
      res
      .status(500)
      .send(err);
    }
  }
//Get all the  patients vaccines
async function GetAll (req,res)
{ 
    try
    {
        let data =await vaccine
        .find()
        res
        .send(data);
    }
    catch(err)
    {
        res
        .status(500)
        .send(err);
    }
}



module.exports={GetById,GetAll,AddVaccine};