import express from "express";
import {
  CreateTour,
  UpdateTour,
  DeleteTour,
  getSingleTour,
  getAllTour,
  getTourBySeaarch,
  getFeaturedTour,
  getTourCount,
} from "../controllers/TourController.js";
import { VerifyAdmin } from "../Utils/verfyToken.js";

const Router = express.Router();

// post new tour

Router.post("/" ,  CreateTour);

// put new   tour

Router.put("/:id", VerifyAdmin , UpdateTour);

// delete tour

Router.delete("/:id", VerifyAdmin , DeleteTour);

// get Sing  tour 

Router.get("/:id",  getSingleTour);

// get all  tour

Router.get("/", getAllTour);

// search tour 

Router.get('/search/getTourBySeaarch' ,getTourBySeaarch )
Router.get('/search/getFeaturedTours' , getFeaturedTour )
Router.get('/search/getTourCount' , getTourCount )

export default Router;
