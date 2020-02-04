// server.js
import Next from "next";
import { createServer } from "http";
import Routes from "./router";

const APP = Next({ dev: process.env.NODE_ENV !== "production" });
const HANDLER = Routes.getRequestHandler(APP);

// Without express
APP.prepare().then(() => {
    createServer(HANDLER).listen(8080);
});
