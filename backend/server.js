require("dotenv").config();

const connectDB = require("./db");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Tree = require("./Tree");

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL?.trim()
].filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

const formatTree = tree => ({
    ...tree,
    id: tree.id || tree._id.toString()
});

const treeFilterForId = id => mongoose.isValidObjectId(id)
    ? { $or: [{ id }, { _id: id }] }
    : { id };

app.get("/", (req, res) => {
    res.send("GreenConnect Backend is running!");
});

app.get("/api/trees", async (req, res) => {
    try {
        const trees = await Tree.find();

        res.status(200).json(trees.map(tree => formatTree(tree.toObject())));
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.get("/api/trees/:id", async (req, res) => {
    try {
        const tree = await Tree.findOne(treeFilterForId(req.params.id));

        if (!tree) {
            return res.status(404).json({
                message: "Tree not found"
            });
        }

        res.status(200).json(formatTree(tree.toObject()));
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.put("/api/trees/:id", async (req, res) => {
    try {
        const updatedTree = await Tree.findOneAndUpdate(
            treeFilterForId(req.params.id),
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedTree) {
            return res.status(404).json({
                message: "Tree not found"
            });
        }

        res.status(200).json({
            message: "Tree updated successfully",
            tree: updatedTree
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

app.delete("/api/trees/:id", async (req, res) => {
    try {
        const deletedTree = await Tree.findOneAndDelete(treeFilterForId(req.params.id));

        if (!deletedTree) {
            return res.status(404).json({
                message: "Tree not found"
            });
        }

        res.status(200).json({
            message: "Tree deleted successfully",
            tree: deletedTree
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

app.post("/api/trees", async (req, res) => {
    try {
        const newTree = new Tree(req.body);

        await newTree.save();

        res.status(201).json({
            message: "Tree added successfully",
            tree: newTree
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};

startServer();