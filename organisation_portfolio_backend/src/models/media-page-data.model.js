import mongoose from "mongoose";
import dbLogger from "../middleware/dbLogger.middleware";

const mediaSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        mediaType: { type: String, enum: ["image", "video", "audio"] },
        mediaUrl: { type: String },
        thumbnailUrl: { type: String },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

mediaSchema.pre("save", dbLogger);

export const Media = mongoose.model("Media", mediaSchema);
