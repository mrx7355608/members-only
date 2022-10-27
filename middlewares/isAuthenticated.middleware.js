const isAuth = function (req, res, next) {
    if (req.isAuthenticated()) return next();
    req.flash("error", "You must login to continue");
    return res.redirect("/auth/login");
};

export default isAuth;
