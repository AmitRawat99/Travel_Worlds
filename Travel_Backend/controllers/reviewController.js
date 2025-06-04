import Review from "../models/Reviews.js";
import Tour from "../models/Tour.js";

export const createReview = async (req, res) => {
  const tourid = req.params.tourId;
  const newReview = new Review({ ...req.body });
  try {
    const saveReview = await newReview.save();

    // after creating a new review now update the review array of the tour

    await Tour.findByIdAndUpdate(tourid, {
      $push: { reviews: saveReview._id },
    });

    res.status(200).json({
      success: true,
      message: "Review Submited",
      data: saveReview,
    });
  } catch (error) {
    console.error("Error in createReview:", error);
    res.status(500).json({
      success: false,
      message: "Failed to Submit",
      error: error.message,
    });
  }
};
