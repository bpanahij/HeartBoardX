/**
 * Model for tracking events needing to be done for patient by Care Givers
 * @type {exports|*}
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MedicationSchema = new mongoose.Schema({
  pillImageSrc: String,
  bottleImageSrc: String,
  geocode: {
    lat: Number,
    lng: Number
  },
  locationName: String,
  notes: String,
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Medication", MedicationSchema);
