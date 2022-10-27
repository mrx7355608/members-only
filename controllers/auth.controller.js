import User from "@models/user.model";
class AuthController {
    renderLoginPage(req, res, next) {
        res.locals.error = req.flash("error");
        res.locals.success = req.flash("success");
        return res.render("login", { title: "Login | MembersOnly" });
    }

    renderSignupPage(req, res, next) {
        res.locals.error = req.flash("error");
        return res.render("signup", { title: "SignUp | MembersOnly" });
    }

    async signupUser(req, res, next) {
        // Check if user exists
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            req.flash("error", "User already exists");
            return res.redirect("back");
        }
        // create user
        await User.create(req.body);
        req.flash("success", "Thank you for signing up");
        return res.redirect("/auth/login");
    }

    loginUser(req, res, next) {
        // Login handled by passport
        // If success then
        return res.redirect("/");
    }

    logoutUser(req, res, next) {
        req.logout(function (err) {
            if (err) return next(new AppError(err.message, 400));
            return res.redirect("/");
        });
    }
}

export default AuthController;
