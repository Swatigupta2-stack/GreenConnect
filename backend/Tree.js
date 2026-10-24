const mongoose = require("mongoose");

const treeSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        lowercase: true,
        match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        unique: true,
        sparse: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    scientificName: {
        type: String,
        required: true,
        trim: true
    },
    minSpace: {
        type: Number,
        required: true,
        min: 0
    },
    sunlight: {
        type: [{
            type: String,
            enum: ["low", "medium", "high"]
        }],
        required: true,
        validate: value => value.length > 0
    },
    water: {
        type: [{
            type: String,
            enum: ["low", "medium", "high"]
        }],
        required: true,
        validate: value => value.length > 0
    },
    purposes: {
        type: [{
            type: String,
            enum: ["shade", "fruits", "flowers", "biodiversity", "air-purification", "general"]
        }],
        required: true,
        validate: value => value.length > 0
    },
    growthRate: {
        type: String,
        required: true,
        enum: ["Fast", "Medium", "Slow"]
    },
    matureHeight: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    benefits: {
        type: [{
            type: String,
            trim: true
        }],
        required: true,
        validate: value => value.length > 0
    }
});

module.exports = mongoose.model("Tree", treeSchema);