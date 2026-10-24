const assert = require("node:assert/strict");
const test = require("node:test");
const Tree = require("./Tree");

const validTree = {
    id: "test-tree",
    name: "Test Tree",
    scientificName: "Arbor testus",
    minSpace: 100,
    sunlight: ["medium"],
    water: ["low"],
    purposes: ["shade"],
    growthRate: "Medium",
    matureHeight: "10-15 m",
    description: "A tree used to verify the schema.",
    benefits: ["Provides shade"]
};

test("accepts a complete tree with supported values", async () => {
    const tree = new Tree(validTree);
    await assert.doesNotReject(tree.validate());
});

test("rejects unsupported environmental values", async () => {
    const tree = new Tree({ ...validTree, sunlight: ["bright"] });
    await assert.rejects(tree.validate(), error => {
        assert.ok(Object.keys(error.errors).some(path => path.startsWith("sunlight")));
        return true;
    });
});
