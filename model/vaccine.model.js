const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Vaccine schema & model
const VaccineSchema = new Schema({
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      type:String,
      ref: 'Patient',
      required: [true, 'patientId field is required']
    },
    vaccinations: {
      type: [{
        date: {
          type: Date,
          required: [true, 'vaccination date field is required'],
          max: [new Date(), "vaccination date cannot be in the future"],   
          min: ['2021-01-01', "The corona vaccines were only created in 2021"]
        },
        manufacturer: {
          type: String,
          required: [true, 'manufacturer field is required'],
          minlength: 2,
        }
      }],
      maxlength: 4,
      required:[true, 'vaccination field is required'],
    },
  });

  VaccineSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
//create object 
const Vaccine = mongoose.model('vaccine', VaccineSchema);
//create colection 
Vaccine.createCollection().then(function (collection) {
    console.log('Collection vaccine is created!');
})

Vaccine.createIndexes();
module.exports  =Vaccine;
   
