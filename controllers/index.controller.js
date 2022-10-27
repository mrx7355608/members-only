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
    renderPostMessagePage(req, res, next) {
        res.locals.error = req.flash("error");
        res.locals.success = req.flash("success");
        return res.render("post_message", {
            title: "Post message | MembersOnly",
            user: req.user,
        });
    }
}

export default IndexController;
