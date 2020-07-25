const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  "address": {
    "type": "string",
  },
  "birthdate": {
    "type": "Date"
  },
  "email": {
    "type": "string"
  },
  "firstname": {
    "type": "string"
  },
  "gender": {
    "type": "string"
  },
  "id": {
    "type": "number"
  },
  "lastname": {
    "type": "string"
  },
  "password": {
    "type": "string"
  },
  "phone": {
    "type": "string"
  },
  "roles": {
    "id": {
      "type": "number"
    },
    "rolname": {
      "type": "string"
    }
  },
  "username": {
    "type": "string"
  }
});

module.exports = mongoose.model('Users', UserSchema);