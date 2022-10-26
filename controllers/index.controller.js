class IndexController {
    renderHomePage(req, res, next) {
        res.locals.error = req.flash("error");
        res.locals.success = req.flash("success");

        // Fetch messages
        return res.render("homepage", {
            title: "Homepage | MembersOnly",
            user: req.user,
            messages: [],
        });
    }
    renderAddMessagePage(req, res, next) {
        res.locals.error = req.flash("error");
        res.locals.success = req.flash("success");
        return res.render("add_message");
    }
    renderUserAccountPage(req, res, next) {
        res.locals.error = req.flash("error");
        res.locals.success = req.flash("success");
        return res.render("user_account");
    }
}

export default IndexController;
