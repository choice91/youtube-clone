import express from "express";
import morgan from "morgan";
import path from "path";
// routers
import globalRouter from "./routes/globalRouter";
import videoRouter from "./routes/videoRouter";
import userRouter from "./routes/userrouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;