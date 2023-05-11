const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Sick schema & model
const SickSchema = new Schema({
  patientId: {
      unique: true,
      type:Schema.Types.ObjectId,
      ref: "patient",
      type:String,
      required: [true, "patiantId field is required"],
      
    },
  
    dateOfPositive: {
      type: Date,
      max: [new Date(), "dateOfPositive cannot be in the future"],
    },
    recoveryDate: {
      type: Date,
      max: [new Date(), "recoveryDate cannot be in the future"],
    },
  });


  SickSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
//create object 
const Sick = mongoose.model('sick', SickSchema);
//create colection 
Sick.createCollection().then(function (collection) {
    console.log('Collection sick is created!');
})

Sick.createIndexes();
module.exports  = Sick;