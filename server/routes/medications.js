/**
 * Publishing Medication routes
 * @type {exports|*}
 */
var express = require('express')
  , api = express()
  , _ = require('underscore');

var MedicationModel = require('../models/MedicationModel');
/**
 *
 */
var init = function(req, res, next) {
  return next();
};

var getOne = function(req, res, next) {
  //get an Medication
  MedicationModel.findById(req.params.id, function(err, Medication)
  {
    res.json(Medication);
  });
};

var getAll = function(req, res, next) {
  //get Medications
  MedicationModel.find({}, function(err, Medications)
  {
    res.json(Medications);
  });
};

var saveOne = function(req, res, next) {
  //update an Medication
  console.log('save');
  MedicationModel.findById(req.body._id, function(err, Medication)
  {
    console.log('save', Medication);
    if (_.isEmpty(Medication))
    {
      Medication = new MedicationModel(req.body);
      Medication.save(function(err) {
        res.json(Medication);
        return;
      });
    }
    Medication.update(_.omit(req.body, '_id'), {}, function(err, rawDoc) {
      res.json(req.body);
    });
    return;
  });
};

api.all("/", init);
api.get("/", getAll);
api.get("/:id", getOne);
api.put("/:id", saveOne);
api.post("/", saveOne);
module.exports = api;
