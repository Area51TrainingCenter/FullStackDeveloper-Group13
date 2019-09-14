const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		email: true,
		trim: true,
		required: true,
		lowercase: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	}
})

const User = mongoose.model("User", esquema)

export default User