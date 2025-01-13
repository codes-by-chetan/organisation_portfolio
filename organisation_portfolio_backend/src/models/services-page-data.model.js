import mongoose from "mongoose";
import dbLogger from "../middleware/dbLogger.middleware.js";

const servicesPageDataSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
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

servicesPageDataSchema.pre("save", dbLogger);

export const ServicesPageData = mongoose.model(
    "ServicesPageData",
    servicesPageDataSchema
);
