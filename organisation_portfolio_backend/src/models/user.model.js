import mongoose from "mongoose";
import dbLogger from "../middleware/dbLogger.middleware.js";

const userSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "fullName is required"],
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: [true, "email is required"],
            trim: true,
            unique: true,
            index: true,
            match: [
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/,
                "Please fill a valid email address",
            ],
        },
        contactNumber: {
            type: String,
            required: [true, "contactNumber is required"],
            trim: true,
            index: true,
            unique: true,
            match: [/^[0-9]{10}$/, "Please fill a valid contact number"],
        },
        userName: {
            type: String,
            required: [true, "userName is required"],
            trim: true,
            index: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
            trim: true,
            index: true,
        },
        role: {
            type: String,
            required: [true, "role is required"],
            trim: true,
            index: true,
            enum: ["admin", "user"],
        },
        status: {
            type: String,
            required: [true, "status is required"],
            trim: true,
            enum: ["active", "inactive"],
            default: "active",
        },
    },
    {
        timestamps: true,
    }
);
userSchema.pre("save", dbLogger);
export const User = mongoose.model("User", userSchema);
