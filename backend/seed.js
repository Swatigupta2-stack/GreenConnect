require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./db");
const Tree = require("./Tree");

async function seedTrees() {
    try {
        const { default: trees } = await import("../data-trees-final.js");

        await connectDB();

        for (const tree of trees) {
            await Tree.updateOne(
                { id: tree.id },
                { $set: tree },
                { upsert: true, runValidators: true }
            );
        }

        console.log(`Seeded ${trees.length} trees without deleting existing records.`);
    } catch (error) {
        console.error("Tree seeding failed:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

seedTrees();
