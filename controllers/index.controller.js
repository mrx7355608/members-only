import Message from "@models/message.model";
class IndexController {
    async renderHomePage(req, res, next) {
        res.locals.error = req.flash("error");
        res.locals.success = req.flash("success");

        // Fetch messages
        let messages;
        if (req.user) {
            messages = await Message.find({})
                .sort("-createdAt")
                .populate("author");
        } else {
            messages = await Message.find({}, "-message")
                .sort("-createdAt")
                .populate("author");
        }
        console.log(messages);
        return res.render("homepage", {
            title: "Homepage | MembersOnly",
            user: req.user,
            messages,
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

    async addNewMessage(req, res) {
        console.log(req.body);
        await Message.create({
            author: req.user._id,
            message: req.body.message,
        });

        req.flash("success", "Message posted successfully");
        return res.redirect("/");
    }
}

export default IndexController;
