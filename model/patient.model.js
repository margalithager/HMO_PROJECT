const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { json } = require('body-parser');


// create Patient schema & model
const PatientSchema = new Schema({
    firstName: { 
        type: String,
       required: [true, 'firstName field is required'],
       minlength: 2,
     },
    lastName: {
         type: String,
          required: [true, 'lastName field is required'],
          minlength: 2,
         },
patientId: { 
        type: String,
          unique: true,
          required: [true, 'patientId field is required'],
          minlength: 6,
          maxlength: 9,
        },
    DateOfBirth: {
         type: Date,
         required: [true, 'birthDate field is required'] ,
         max: [new Date(), "birthDate cannot be in the future"],
        },
    adress:{
          city:{
          type: String,
          },
          street:{
          type: String,
      
          },
          number:{
          type: Number,
          }
      },
    phone: {
         type: String ,
         required: [true, 'phone field is required'],
         minlength: 9,
         maxlength: 20,
        },
    mobile: {
         type: String ,
         required: [true, 'mobile field is required'],
         minlength: 9,
          maxlength: 20,
        }
  });

  PatientSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
//create object 
const Patient = mongoose.model('patient', PatientSchema);
//create colection 
Patient.createCollection().then(function (collection) {
    console.log('Collection patient is created!');
})

Patient.createIndexes();
module.exports  = Patient;