const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err});
      });
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then((doc) => res.json(doc.ops[0]))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err});
      });
  });

  router.delete("/:id", (req, res) => {
    const deleted = req.params.id;
    collection
    .deletedOne({_id: ObjectID(deleted)})
    .then((doc) => {
      res.json(doc);
    })
    .catch(
      (err) => {
        console.log("oh no!", err);
        res.status(500);
        res.json({status: 500, error: err})
      }
    );
  });

  return router;
};

module.exports = createRouter;