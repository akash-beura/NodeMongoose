const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    // When we include this, it will automatically maintain created/updatedAt for each document
    timestamps: true,
  }
);

var Dishes = mongoose.model("dish", dishSchema);

module.exports = Dishes;
