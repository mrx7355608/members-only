import joi from "joi";

const userSchema = joi
    .object({
        fname: joi.string().min(4).required().messages({
            "string.required": "First name is required!",
            "string.empty": "First name cannot be empty",
            "string.min": "First name should be 4 characters long at least",
        }),
        lname: joi.string().min(4).required().messages({
            "string.required": "Last name is required!",
            "string.empty": "Last name cannot be empty ",
            "string.min": "Last name should be 4 characters long at least",
        }),
        username: joi.string().min(4).required().messages({
            "string.required": "Username is required!",
            "string.empty": "Username is required",
            "string.min": "Username should be 4 characters long at least",
        }),
        password: joi.string().min(8).required().messages({
            "string.required": "Password is required!",
            "string.empty": "Enter a password for your account",
            "string.min": "Password should be 8 characters long at least",
        }),
        confirm_password: joi.valid(joi.ref("password")).required().messages({
            "any.only": "Passwords do not match",
            "any.required": "Confirm your password before proceeding.",
        }),
    })
    .messages({
        "any.required": "Fill the form properly!",
    });
const messageSchema = joi
    .object({
        message: joi.string().min(10).required().messages({
            "string.empty": "Message cannot be empty!",
            "string.min": "Message should container 10 characters at least.",
        }),
    })
    .messages({
        "any.required": "Fill the form properly",
    });

export { userSchema, messageSchema };
