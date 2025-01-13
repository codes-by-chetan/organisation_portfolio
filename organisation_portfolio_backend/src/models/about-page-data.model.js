import mongoose from "mongoose";
import dbLogger from "../middleware/dbLogger.middleware.js";

const aboutPageDataSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    blocks: [
        {
            type: String,
            required: true,
        },
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});
aboutPageDataSchema.pre("save", dbLogger);
export const aboutPageData = mongoose.model(
    "AboutPageData",
    aboutPageDataSchema
);
