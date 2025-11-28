import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MovieSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    language: {
        type: String,
        enum: ["Russian", "English", "Uzbek"],
        trim: true,
        required: true
    },
    genre: {
        type: String,
        enum: ["comedy", "horror", "documentary", "cartoon"],
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

export default model("Movie", MovieSchema);
