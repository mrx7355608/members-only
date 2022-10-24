class AppError extends Error {
    constructor(message, code, isClientError = true) {
        super(message);
        this.message = message;
        this.code = code;
        this.isClientError = isClientError;
    }
}

export default AppError;
