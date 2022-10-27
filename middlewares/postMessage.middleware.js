import AppError from "@utils/AppError.utils";
import { messageSchema } from "@validation/schema.validation";

const validateMessage = async function (req, res, next) {
    try {
        await messageSchema.validateAsync(req.body);
        next();
    } catch (err) {
        return next(new AppError(err.message, 400));
    }
};

export default validateMessage;
