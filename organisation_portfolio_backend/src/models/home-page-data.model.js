import mongoose from "mongoose";
import dbLogger from "../middleware/dbLogger.middleware.js";

const imageSchema = new mongoose.Schema({
    url: { type: String, required: [true, "url is required"] },
    publicId: { type: String, required: [true, "publicId is required"] },
});
const serviceSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name is required"] },
    icon: { type: String, required: [true, "icon is required"] },
    color: {
        type: String,
        required: [true, "color is required"],
        enum: ["blue", "pink"],
        default: "blue",
    },
});
const statSchema = new mongoose.Schema({
    value: { type: Number, required: [true, "value is required"] },
    label: { type: String, required: [true, "label is required"] },
    icon: { type: String, required: [true, "icon is required"] },
});
const homePageDataSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "title is required"],
        },
        description: {
            type: String,
            required: [true, "description is required"],
        },
        images: [imageSchema],
        stats: [statSchema],
        services: [serviceSchema],
        profileDownload: {
            type: String,
            required: [true, "profileDownload is required"],
        },
    },
    {
        timestamps: true,
    }
);

homePageDataSchema.pre("save", dbLogger);
export const HomePageData = mongoose.model("HomePageData", homePageDataSchema);
