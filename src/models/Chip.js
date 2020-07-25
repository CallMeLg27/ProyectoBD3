const mongoose = require('mongoose');

const ChipSchema = mongoose.Schema({
  "dni_user": {
    "type": "string"
  },
  "id": {
    "type": "number"
  },
  "numero": {
    "type": "string"
  },
  "operador": {
    "type": "string"
  },
  "plan": {
    "type": "string"
  },
  "saldo": {
    "type": "number"
  }
});

module.exports = mongoose.model('Chips', ChipSchema);