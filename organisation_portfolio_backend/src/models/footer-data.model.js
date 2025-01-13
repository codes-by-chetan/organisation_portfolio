import mongoose from "mongoose";
import dbLogger from "../middleware/dbLogger.middleware.js";

const aboutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});
const directionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    embedString: { type: String, required: true },
});
const contactSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});
const footerDataSchema = new mongoose.Schema({
    about: aboutSchema,
    direction: directionSchema,
    contact: contactSchema,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

footerDataSchema.pre("save", dbLogger);

export const FooterData = mongoose.model("FooterData", footerDataSchema);
