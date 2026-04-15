const router = require("express").Router()
const { User } = require("../models/auth")

router.post("/register", async (req, res) => {
	try {
		// destructure content of your body that you will need
		const { fullName, email, password } = req.body

		// validate data incoming from the client
		if (fullName && email && password) {
			// call create on your User schema and pass the data
			const newUser = await User.create({ fullName, email, password})
			console.log(newUser)

			res.status(201).json({
				message: "User created",
				email: newUser.dataValues.email
			})
		} else {
			// throw error in case client did not provide sufficient info
			throw new Error("Please provide required information")
		}

	} catch(err) {
		console.log(err)
		res.status(500).json({ message: `${err}` })
	}
})

router.post("/login", async (req, res) => {
	try {
		// destructuring email and password from body
		const { email, password } = req.body

		// perform input validation
		if (!email || !password) {
			throw new Error("Please provide email and password")
		}

		// findOne accepts a query object where we match email from db to email from req
		const foundUser = await User.findAll({ where: { email }})
		// hint: { where: { email }} is the same as { email: email }
		console.log(foundUser)


	} catch(err) {
		console.log(err)
		res.status(500).json({ message: `${err}` })
	}
})

module.exports = router