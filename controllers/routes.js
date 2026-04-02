const db = require("../models/carDB");
const { get } = require("../routes/auth");

function getAll(req, res) {
	try {
		res.status(200).json(db);
	} catch (err) {
		res.status(500).json({ message: "Internal Server Error" });
	}
}

function getFilter(req, res) {
	try {
		const { make, model, year, mileage, transmission, drivetrain, color, price } =
			req.query;
		console.log(req.query)
		let result = db

		if (make !== undefined) {
			result = result.filter(i => i.make === make)
		}

		if (model !== undefined) {
			result = result.filter(i => i.model.includes(model))
		}

		res.status(200).json(result)
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

module.exports = { getAll, getFilter };
