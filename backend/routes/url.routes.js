import { Router } from "express";
import { shortenURL } from "../controllers/url.controllers.js";

const urlRouter = Router();

urlRouter.route("/shorten").post(shortenURL);

export default urlRouter;