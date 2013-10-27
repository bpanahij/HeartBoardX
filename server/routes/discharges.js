/**
 * Publishing Discharge routes
 * @type {exports|*}
 */
var express = require('express')
  , api = express()
  , _ = require('underscore');

var DischargeModel = require('../models/DischargeModel');
/**
 *
 */
var init = function(req, res, next) {
  return next();
};

var getOne = function(req, res, next) {
  //get an Discharge
  DischargeModel.findById(req.params.id, function(err, Discharge)
  {
    res.json(Discharge);
  });
};

var getAll = function(req, res, next) {
  //get Discharges
  DischargeModel.find({}, function(err, Discharges)
  {
    res.json(Discharges);
  });
};

var saveOne = function(req, res, next) {
  //update an Discharge
  console.log('save');
  DischargeModel.findById(req.body._id, function(err, Discharge)
  {
    console.log('save', Discharge);
    if (_.isEmpty(Discharge))
    {
      Discharge = new DischargeModel(req.body);
      Discharge.save(function(err) {
        res.json(Discharge);
        return;
      });
    }
    Discharge.update(_.omit(req.body, '_id'), {}, function(err, rawDoc) {
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
