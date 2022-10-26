import { userSchema } from "@validation/schema.validation";

export default async function (req, res, next) {
    try {
        await userSchema.validateAsync(req.body);
        next();
    } catch (err) {
        req.flash("error", err.message);
        return res.redirect("back");
    }
}
