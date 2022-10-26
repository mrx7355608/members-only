import { Router } from "express";
import AuthController from "@controllers/auth.controller";
import signupValidatorMiddleware from "@middlewares/signupValidator.middleware";

/* eslint-disable new-cap */
const authRouter = Router();
const authController = new AuthController();

// Login
authRouter
    .route("/login")
    .get(authController.renderLoginPage)
    .post(authController.loginUser);

// Signup
authRouter
    .route("/signup")
    .get(authController.renderSignupPage)
    .post(signupValidatorMiddleware, authController.signupUser);

// Logout
authRouter.get("/logout", authController.logoutUser);

export default authRouter;
