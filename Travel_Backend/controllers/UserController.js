import User from "../models/User.js";

export const CreateUser = async (req , res) => {
  console.log("Incoming body:", req.body);

  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    console.log(" User saved:", savedUser);
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedUser,
    });
  } catch (error) {
    console.error("Error saving User:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create",
    });
  }
};

// UpdateUser

export const UpdateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const UpdateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfull Update",
      date: UpdateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To  Update",
      date: UpdateUser,
    });
  }
};

// DeleteUser

export const DeleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
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

// getallUser

export const getAllUser = async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = 8;  
  const skip = (page - 1) * limit;

  try {
    const User = await User.find().skip(skip).limit(limit);
    const total = await User.countDocuments(); 

    res.status(200).json({
      success: true,
      message: "Successfully fetched Users",
      count: User.length,           
      totalUsers: total,           
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      data: User,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Users not found",
    });
  }
};


// getsinglUser

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const User = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully Find Data",
      data: User,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found Data",
    });
  }
};

// get User by search 

export const getUserBySeaarch = async(req , res)=>{
  const City = new RegExp(req.query.City , 'i');
  const Distance = new RegExp(req.query.Distance);
  const MaxGroupSize = new RegExp(req.query.MaxGroupSize);

  try{
    const Users = await User.find({City , Distance:{$gte : Distance} , MaxGroupSize:{$gte : MaxGroupSize}})
    res.status(200).json({
      success: true,
      message: "Successfully",
      data: User,
    });
  }catch(error){
    res.status(404).json({
      success: false,
      message: "Not Found Data",
    });
  }
}


// get feature User 


export const getFeaturedUser = async(req , res)=>{
  try{
    const Users = await User.find({featured : true})
    res.status(200).json({
      success: true,
      message: "Successfully",
      data: Users,
    });
  }catch(error){
    res.status(404).json({
      success: false,
      message: "Not Found Data",
    });
  }
}

export const getUserCount = async(req , res)=>{
  try{
    const UserCounter = await User.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      message: "Successfully",
      data: UserCounter,
    });
  }catch(error){
    res.status(404).json({
      success: false,
      message: "failed to fatch",
    });
  }
}