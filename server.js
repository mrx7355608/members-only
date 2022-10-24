import "dotenv/config";

import { createServer } from "http";
import mongoose from "mongoose";
import app from "@root/app";

const server = createServer(app);

const startServer = function () {
    // Connecting to database
    mongoose.connect(process.env.DATABASE_URL);
    console.log("[INFO] Connected to database");
    // Listening to requests
    const PORT = process.env.PORT || 3000;
    server.listen(3000, function () {
        console.log("[INFO] Server started on PORT", PORT);
    });
};

startServer();
