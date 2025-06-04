import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config()

// register router

export const Register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const {user , email , password , photo} = req.body;
k
    const newUser = new User({
      username: user,
      email: email,
      password: hash,
      photo: photo || "",
    });

    if(!user || !email || !password){
      return res.status(400).json({
        success : false,
        message : "All Field Requred"
      })
    }

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully Created",
    });
  } catch (error) {
    console.log("error" , error);
    
    res.status(500).json({
      success: false,
      message: "Failed To Create. Try Again",
      error: error.message,
    });
  }
};




// login router


// export const Login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User Not Found',
//       });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);

//     if (!isPasswordCorrect) {
//       return res.status(400).json({
//         success: false,
//         message: 'Incorrect Password or Email',
//       });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET_KEY,
//       { expiresIn: '15d' }
//     );

//     const { password: userPassword, role, ...rest } = user._doc;

//     res
//       .cookie('accessToken', token, {
//         httpOnly: true,
//         maxAge: 15 * 24 * 60 * 60 * 1000,
//       })
//       .status(200)
//       .json({
//         success: true,
//         message: 'Successfully Logged In',
//         token,
//         data: { ...rest },
//         role
//       });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Failed to Login',
//     });
//   }
// };


export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    console.log(user)

    // If user not found

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User Not Found',
      });
    }

    // Compare provided password with hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    

    // If password does not match
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect Password or Email',
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '15d' }
    );

    // Exclude password from user data
    const { password: userPassword, role, ...rest } = user._doc;

    // Set cookie and respond
    res
      .cookie('accessToken', token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
      })
      .status(200)
      .json({
        success: true,
        message: 'Successfully Logged In',
        token,
        data: { ...rest },
        role,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to Login',
    });
  }
};
