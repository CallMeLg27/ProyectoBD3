const mongoose = require('mongoose');

const CellphoneSchema = mongoose.Schema({
  "brand": {
    "type": "string"
  },
  "description": {
    "type": "string"
  },
  "id": {
    "type": "number"
  },
  "memory": {
    "type": "string"
  },
  "model": {
    "type": "string"
  },
  "os": {
    "type": "string"
  },
  "price": {
    "type": "number"
  },
  "quality": {
    "type": "string"
  },
  "stock": {
    "type": "number"
  }
});

module.exports = mongoose.model('Cellphones', CellphoneSchema);