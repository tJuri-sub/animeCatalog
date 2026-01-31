import animeData from "../models/anime.js";

export const addAnime = async (req, res) => {
  try {
    const { animeTitle, rating } = req.body;

    if (!animeTitle) {
      return res.status(400).json({
        error: "Anime title is required",
      });
    }

    const ifAnimeTitleExist = await animeData.findOne({ animeTitle });

    if (ifAnimeTitleExist) {
      return res.status(400).json({
        error: "anime title is already added",
      });
    }

    if (!rating) {
      return res.status(400).json({
        error: "Rating is required",
      });
    }

    const animeEntry = await animeData.create({
      animeTitle,
      rating,
    });

    return res.status(201).json({ message: "anime entry added" });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const updateAnime = async (req, res) => {
  const { id } = req.params;
  const { animeTitle, rating } = req.body;

  try {
    const entry = await animeData.findById(id);
    if (!entry) {
      return res.status(404).json({
        error: "entry not found",
      });
    }

    if (!animeTitle && !rating) {
      return res.status(400).json({
        error: "Please provide animeTitle or rating to update",
      });
    }

    const updatedEntry = await animeData.findByIdAndUpdate(
      id,
      { animeTitle, rating },
      { new: true, runValidators: true },
    );

    return res.status(200).json({
      message: "anime entry updated",
      data: updatedEntry,
    });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

// not relevant for now
export const deleteAnime = async (req, res) => {};
