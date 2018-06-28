const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
const { ObjectID } = require("mongodb");

User.findById("5b32b16cc3c9c932dc78d404")
	.then(user => {
		if (user) {
			console.log(JSON.stringify(user, undefined, 2));
		} else {
			console.log("User was not found.");
		}
	})
	.catch(e => {
		console.log("User was not found!");
	});

// Todo.find({
// 	_id: id,
// }).then(todos => {
// 	console.log(todos);
// });

// Todo.findOne({
// 	_id: id,
// }).then(todo => {
// 	console.log("Todo: ", todo);
// });

// Todo.findById(id)
// 	.then(todo => {
// 		if (!todo) {
// 			return console.log("ID not found!");
// 		}
// 		console.log("Todo by ID: ", todo);
// 	})
// 	.catch(e => {
// 		console.log(e);
// 	});
