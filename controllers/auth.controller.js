class AuthController {
    renderLoginPage() {
        res.locals.error = req.flash("error");
        return res.render("login");
    }

    renderSignupPage() {
        res.locals.error = req.flash("error");
        return res.render("signup");
    }

    loginUser() {}
    signupUser() {}
    logoutUser() {}
}

export default AuthController;
