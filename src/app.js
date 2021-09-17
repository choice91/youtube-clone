import express from "express";
import morgan from "morgan";
import path from "path";
// db
import "./db";
// routers
import globalRouter from "./routes/globalRouter";
import videoRouter from "./routes/videoRouter";
import userRouter from "./routes/userrouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 💪`);

app.listen(PORT, handleListening);
