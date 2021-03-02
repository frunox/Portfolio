const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  //
  // Save the Repository information with whatever fields are sent in

  updateRepositories: async function (req, res) {
    db.Repositories.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    ).exec((err, dbRepository) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(dbRepository);
      }
    });
  },
  // find 1 repo to see if Repositories collection is populated (to set up visitor)
  findRepo: function (req, res) {
    db.Repositories.findOne()
      .exec((err, repo) => {
        if (err) {
          return res.json(err)
        } else {
          return res.json(repo)
        }
      });
  },
};
