import { Router } from "express";
import { shortenURL, resolveURL, getAnalytics } from "../controllers/url.controllers.js";

const urlRouter = Router();

urlRouter.route("/shorten").post(shortenURL);
urlRouter.route("/resolve/:shortUrl").get(resolveURL);
urlRouter.route("/analytics/:shortUrl").get(getAnalytics);

export default urlRouter;