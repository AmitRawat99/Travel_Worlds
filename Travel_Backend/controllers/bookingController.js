import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const saveBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your Tour Is Booked",
      data: saveBooking,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


// get single booking 

export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const Book = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: "Succssfull Booked",
      data: Book,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};

// get all booking 


export const getAllBooking = async (req, res) => {
  try {
    const Books = await Booking.find(id);
    res.status(200).json({
      success: true,
      message: "Succssfull Booked",
      data: Books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
