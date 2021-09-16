import express from "express";
// controller
import {
  watch,
  getEdit,
  postEdit,
  upload,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(upload);
videoRouter.route("/:id(\\d+)").get(watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id(\\d+)/delete").get(deleteVideo);

export default videoRouter;
