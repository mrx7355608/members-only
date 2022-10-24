const catch404 = function (req, res) {
    return res.render("error", { message: "404 Resource not found! " });
};

const errorHandler = function (err, req, res, next) {
    // ``isClientError`` is a prop of a custom error class
    if (err.isClientError) {
        // Most of the time these will be validation errors
        req.flash("error", err.message);
        return res.redirect("back");
    }
    /* eslint-disable operator-linebreak */
    const { NODE_ENV } = process.env;
    let error;
    if (NODE_ENV === "development") {
        error = {
            message: err.message,
            stack: err.stack,
        };
    }
    error = { message: "Something went wrong!" };
    return res.render("error", { title: "OoPs!", error });
};

export { catch404, errorHandler };
