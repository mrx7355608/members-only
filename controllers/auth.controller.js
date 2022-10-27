class AuthController {
    renderLoginPage(req, res, next) {
        res.locals.error = req.flash("error");
        return res.render("login");
    }

    renderSignupPage(req, res, next) {
        res.locals.error = req.flash("error");
        return res.render("signup");
    }

    loginUser() {}
    signupUser() {}
    logoutUser() {}
}

export default AuthController;
