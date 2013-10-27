/**
 * Model for tracking events needing to be done for patient by Care Givers
 * @type {exports|*}
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DischargeSchema = new mongoose.Schema({
  videoURL: String,
  locationName: String,
  geocode: {
    lat: Number,
    lng: Number
  },
  notes: String
});
module.exports = mongoose.model("Discharge", DischargeSchema);
