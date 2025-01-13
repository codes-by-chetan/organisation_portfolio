import mongoose from "mongoose";
import dbLogger from "../middleware/dbLogger.middleware.js";

const formFieldSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    inputType: {
        type: String,
        required: true,
    },
    placeHolder: {
        type: String,
        required: true,
    },
    selectValues: {
        type: [String],
        required: true,
    },
});

const ContactPageDataSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    contactForm: [formFieldSchema],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
});

ContactPageDataSchema.pre("save", dbLogger);

export const ContactPageData = mongoose.model(
    "ContactPageData",
    ContactPageDataSchema
);
