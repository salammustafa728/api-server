"use strict";

function validator(req, res, next) {
    let name = req.query.name;
  if (!name) {
    next("Name required");
  } else {
    next();
  }
}

module.exports = validator;