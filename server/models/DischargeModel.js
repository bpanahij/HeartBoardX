/**
 * Model for tracking events needing to be done for patient by Care Givers
 * @type {exports|*}
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DischargeSchema = new mongoose.Schema({
  videoSrc: String,
  locationName: String,
  geocode: {
    lat: Number,
    lng: Number
  },
  notes: String,
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Discharge", DischargeSchema);
