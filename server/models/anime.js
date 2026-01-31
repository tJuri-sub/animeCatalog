import mongoose from "mongoose";

const AnimeData = new mongoose.Schema({
  animeTitle: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const animeData = mongoose.model("Anime", AnimeData);

export default animeData;
