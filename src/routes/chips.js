const express = require('express');
const router = express.Router();
const Chips = require('../models/Chip');


router.get('/', async (req, res) => {
  try {
    const foundChipss = await Chips.find();
    res.json(foundChipss);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/id/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const foundChips = await Chips.find({ "id": id });
    res.json(foundChips);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:_id', async (req, res) => {
  const _id = req.params._id;
  try {
    const foundChips = await Chips.findById(_id);
    res.json(foundChips);
  } catch (err) {
    res.json({ message: err });
  }
});


router.get('/agg/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const foundChips = await Chips.aggregate([{
      "$match": {
        "id": id
      }
    }]);
    res.json(foundChips);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const removedChips = await Chips.remove({ _id: _id })
    res.json(removedChips);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const updatedChips = await Chips.updateOne({ _id: _id }, {
      $set: {
        "dni_user": req.body.dni_user,
        "id": req.body.id,
        "numero": req.body.numero,
        "operador": req.body.operador,
        "plan": req.body.plan,
        "saldo": req.body.saldo
      }
    })
    res.json(updatedChips);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const user = new Chips({
    "dni_user": req.body.dni_user,
    "id": req.body.id,
    "numero": req.body.numero,
    "operador": req.body.operador,
    "plan": req.body.plan,
    "saldo": req.body.saldo
  });
  try {
    const savedChips = await user.save();
    res.json(savedChips);
  } catch (err) {
    res.json({ message: err })
  }
});

module.exports = router;