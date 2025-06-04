import express from "express";
import {
  UpdateUser,
  DeleteUser,
  getSingleUser,
  getAllUser,
} from "../controllers/UserController.js";
const router = express.Router();
import {Verifyuser} from '../Utils/verfyToken.js'

// update user

router.put("/",  Verifyuser , UpdateUser);

// deleteUser User

router.delete("/", Verifyuser , DeleteUser);

// get single user

router.get("/:id", Verifyuser ,  getSingleUser);

// get all user

router.get("/", Verifyuser , getAllUser);

export default router;
