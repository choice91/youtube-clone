import mongoose from "mongoose";

// 데이터 형식 정의
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

// Model
const Video = mongoose.model("Video", videoSchema);

export default Video;
