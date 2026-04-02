const router = require("express").Router()

router.post("/register", (req, res) => {
	try {
		console.log("register route hit")
	} catch(err) {
		console.log(err)
		res.status(500).json({ message: "Internal Server Error" })
	}
})

router.post("/login", (req, res) => {
	try {
		console.log("login route hit")
	} catch(err) {
		console.log(err)
		res.status(500).json({ message: "Internal Server Error" })
	}
})

module.exports = router