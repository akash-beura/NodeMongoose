const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    rating: {
      type: Number,
      max: 5,
      min: 1,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

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
    comments: [commentSchema]
  },
  {
    // When we include this, it will automatically maintain created/updatedAt for each document
    timestamps: true,
  }
);

var Dishes = mongoose.model("dish", dishSchema);

module.exports = Dishes;
