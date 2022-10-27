import { Router } from "express";
import IndexController from "@controllers/index.controller";
import isAuth from "@middlewares/isAuthenticated.middleware";
import postMessageMiddleware from "@middlewares/postMessage.middleware";

/* eslint-disable new-cap */
const indexRouter = Router();
const indexController = new IndexController();

indexRouter.get("/", indexController.renderHomePage);
indexRouter
    .route("/post-message")
    .get(isAuth, indexController.renderPostMessagePage)
    .post(isAuth, postMessageMiddleware, indexController.addNewMessage);

export default indexRouter;
