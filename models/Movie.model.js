const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const MoviesSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
      unique: true,
    },
    director: {
      type: String,
      required: true,
      unique: false,
    },
    image: {
      type: String,
      required: true,
    },
    stars: [
      {
        type: String,
        required: false,
      },
    ],
    showtimes: [
        {
          type: String,
          required: false,
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
