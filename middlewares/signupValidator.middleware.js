import { userSchema } from "@validation/schema.validation";
import AppError from "@utils/AppError.utils";

export default async function (req, res, next) {
    try {
        await userSchema.validateAsync(req.body);
        next();
    } catch (err) {
        return next(new AppError(err.message, 400));
    }
}
