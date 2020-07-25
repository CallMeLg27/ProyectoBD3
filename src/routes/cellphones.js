const express = require('express');
const router = express.Router();
const Cellphone = require('../models/Cellphone');


router.get('/', async (req, res) => {
  try {
    const foundCellphones = await Cellphone.find();
    res.json(foundCellphones);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/id/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const foundCellphone = await Cellphone.find({ "id": id });
    res.json(foundCellphone);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:_id', async (req, res) => {
  const _id = req.params._id;
  try {
    const foundCellphone = await Cellphone.findById(_id);
    res.json(foundCellphone);
  } catch (err) {
    res.json({ message: err });
  }
});


router.get('/agg/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const foundCellphone = await Cellphone.aggregate([{
      "$match": {
        "id": id
      }
    }]);
    res.json(foundCellphone);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const removedCellphone = await Cellphone.remove({ _id: _id })
    res.json(removedCellphone);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const updatedCellphone = await Cellphone.updateOne({ _id: _id }, {
      $set: {
        brand: req.body.brand,
        description: req.body.description,
        id: req.body.id,
        memory: req.body.memory,
        model: req.body.model,
        os: req.body.os,
        price: req.body.price,
        quality: req.body.quality,
        stock: req.body.stock
      }
    })
    res.json(updatedCellphone);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const user = new Cellphone({
    brand: req.body.brand,
    description: req.body.description,
    id: req.body.id,
    memory: req.body.memory,
    model: req.body.model,
    os: req.body.os,
    price: req.body.price,
    quality: req.body.quality,
    stock: req.body.stock
  });
  try {
    const savedCellphone = await user.save();
    res.json(savedCellphone);
  } catch (err) {
    res.json({ message: err })
  }
});

module.exports = router;