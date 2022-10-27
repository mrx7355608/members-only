import { Router } from "express";
import IndexController from "@controllers/index.controller";

/* eslint-disable new-cap */
const indexRouter = Router();
const indexController = new IndexController();

indexRouter.get("/", indexController.renderHomePage);
indexRouter.get("/post-message", indexController.renderPostMessagePage);

export default indexRouter;
