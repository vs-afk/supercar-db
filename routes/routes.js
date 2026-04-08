const router = require("express").Router();
const { getAll, getFilter } = require("../controllers/routes");

// GET /all
router.get("/all", getAll);
// GET /filter
router.get("/filter", getFilter);
// POST /create
router.post("/create", (req, res) => {});
// PUT /:id
router.put("/:id", (req, res) => {});
// DELETE /:id
router.delete("/:id", (req, res) => {});

module.exports = router;
