"use strict";
import express from "express";
import { router } from "./routes/router";
export const app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use("/api/v1", router);
