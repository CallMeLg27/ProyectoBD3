const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/', async (req, res) => {
  try {
    const foundUsers = await User.find();
    res.json(foundUsers);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/id/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const foundUser = await User.find({ "id": id });
    res.json(foundUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:_id', async (req, res) => {
  const _id = req.params._id;
  try {
    const foundUser = await User.findById(_id);
    res.json(foundUser);
  } catch (err) {
    res.json({ message: err });
  }
});


router.get('/agg/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const foundUser = await User.aggregate([{
      "$match": {
        "id": id
      }
    }]);
    res.json(foundUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const removedUser = await User.remove({ _id: _id })
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const updatedUser = await User.updateOne({ _id: _id }, {
      $set: {
        id: req.body.id,
        address: req.body.address,
        birthdate: req.body.birthdate,
        email: req.body.email,
        firstname: req.body.firstname,
        phone: req.body.phone,
        roles: req.body.roles
      }
    })
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const user = new User({
    id: req.body.id,
    address: req.body.address,
    birthdate: req.body.birthdate,
    email: req.body.email,
    firstname: req.body.firstname,
    phone: req.body.phone,
    roles: req.body.roles
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err })
  }
});

module.exports = router;