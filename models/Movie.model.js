const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const MoviesSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    director: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    stars: [
      {
        type: String,
      },
    ],
    showtimes: [
      {
        type: String,
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const MoviesModel = model("Movies", MoviesSchema);

module.exports = MoviesModel;
