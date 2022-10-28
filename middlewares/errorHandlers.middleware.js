const catch404 = function (req, res) {
    return res.render("error", {
        error: { message: "404 Resource not found! " },
    });
};

const errorHandler = function (err, req, res, next) {
    // ``isClientError`` is a prop of a custom error class
    if (err.isClientError) {
        // Most of the time these will be validation errors
        req.flash("error", err.message);
        return res.redirect("back");
    }
    /* eslint-disable operator-linebreak */

    // other errors raised by our app
    let error;
    if (process.env.NODE_ENV === "development") {
        error = {
            message: err.message,
            stack: err.stack,
        };
    } else {
        error = { message: "Something went wrong!" };
    }
    return res.render("error", { title: "OoPs | MemebersOnly", error });
};

export { catch404, errorHandler };
