import mongoose from "mongoose";
import dbLogger from "../middleware/dbLogger.middleware";

const navSchema = new mongoose.Schema({
    label: { type: String, required: true },
    link: { type: String, required: true },
});

const headerDataSchema = new mongoose.Schema(
    {
        organisationName: { type: String, required: true },
        organisationLogo: { type: String, required: true },
        navbar: [navSchema],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

headerDataSchema.pre("save", dbLogger);

export const HeaderData = mongoose.model("HeaderData", headerDataSchema);
