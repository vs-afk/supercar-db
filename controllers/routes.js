const { get } = require("../routes/auth");

/* 
	? Challenge
	* this needs a schema for our cars!
	* create a Cars model file
	* create a schema containing all of the data we wanted to collect
	* make, model, year, mileage, transmission, drivetrain, color, and price
	* export the model
	* import it here
	! NOTE: think thru the constraints you want to use
*/

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
