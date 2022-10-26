import { Router } from "express";
import IndexController from "@controllers/index.controller";

/* eslint-disable new-cap */
const indexRouter = Router();
const indexController = new IndexController();

indexRouter.get("/", indexController.renderHomePage);

export default indexRouter;
