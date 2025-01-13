import mongoose from "mongoose";
import dbLogger from "../middleware/dbLogger.middleware.js";


const careerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        requirements: [
            {
                type: String,
                required: true,
            },
        ],
        responsibilities: [
            {
                type: String,
                required: true,
            },
        ],
        benefits: [
            {
                type: String,
                required: true,
            },
        ],
        location: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ["full-time", "part-time", "internship"],
            required: true,
        },
        experience: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

careerSchema.pre("save", dbLogger);

export const Career = mongoose.model("Career", careerSchema);
