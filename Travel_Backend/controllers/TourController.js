import Tour from "../models/Tour.js";

export const CreateTour = async (req, res) => {
  console.log("Incoming body:", req.body);

  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    console.log(" Tour saved:", savedTour);
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedTour,
    });
  } catch (error) {
    console.error("Error saving tour:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create",
    });
  }
};

// UpdateTour

export const UpdateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const UpdateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfull Update",
      date: UpdateTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To  Update",
      date: UpdateTour,
    });
  }
};

// DeleteTour

export const DeleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfull Delete",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To Delete",
    });
  }
};

// getalltour

export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = 8;
  const skip = (page - 1) * limit;

  try {
    const tour = await Tour.find().populate("reviews").skip(skip).limit(limit);
    const total = await Tour.countDocuments();

    res.status(200).json({
      success: true,
      message: "Successfully fetched tours",
      count: tour.length,
      totalTours: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      data: tour,
    });

    
  } catch (error) {
    console.error("Error fetching tours:", error.message);
    res.status(404).json({
      success: false,
      message: "Tours not found",
    });
  }
};

// getsinglTour

export const getSingleTour = async (req, res) => {
  const { id } = req.params;

  try {
    const tour = await Tour.findById(id).populate("reviews"); // Important!
    if (!tour) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }

    res.status(200).json({ success: true, data: tour });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch tour" });
  }
};

// get tour by search

export const getTourBySeaarch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Successfully",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found Data",
    });
  }
};

// get feature tour

export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Successfully",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found Data",
    });
  }
};

export const getTourCount = async (req, res) => {
  try {
    const tourCounter = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      message: "Successfully",
      data: tourCounter,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "failed to fatch",
    });
  }
};
