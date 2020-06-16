const mongoose = require("mongoose");
const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/conFusion";
// It internally contains mongo db driver
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected to server..");

  Dishes.create({
    name: "My pizza",
    description: "Best pizza",
  })
    .then((dish) => {
      console.log(dish);
      return Dishes.findByIdAndUpdate(
        dish._id,
        {
          $set: {
            description: "Test description updated",
          },
        },
        // This means once update is done the data will be returned.
        { new: true }
      ).exec();
    })
    .then((dish) => {
      dish.comments.push({
        rating: 5,
        comment: "Amazing pizza man!",
        author: "Akash Beura",
      });
      return dish.save();
    })
    .then((dish) => {
      console.log(dish);
      return Dishes.remove({});
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
