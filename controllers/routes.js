const { get } = require("../routes/auth")
const { Users } = require("../models/cars")

function getAll(req, res) {
	try {
	} catch (err) {
		res.status(500).json({ message: "Internal Server Error" });
	}
}

function getFilter(req, res) {
	try {

		res.status(200).json(result)
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

module.exports = { getAll, getFilter };
