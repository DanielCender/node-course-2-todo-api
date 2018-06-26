const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
	"mongodb://localhost:27017/TodoApp",
	(err, db) => {
		if (err) {
			return console.log("Unable to connect to Mongo DB server");
		}
		console.log("Connected to mongoDB server.");

		// db.collection("Todos").insertOne(
		// 	{
		// 		text: "Something",
		// 		completed: false,
		// 	},
		// 	(err, result) => {
		// 		// callack
		// 		if (err) {
		// 			return console.log("Unable to insert Todo", err);
		// 		}
		// 		console.log(JSON.stringify(result.ops));

		// Insert new doc into Users (name, age, location)
		/* db.collection("Users").insertOne(
			{
				name: "Daniel",
				age: 20,
				location: "Frisco, TX",
			},
			(err, result) => {
				if (err) {
					return console.log("Unable to insert user. ", err);
				}
				console.log(result.ops[0]._id.getTimestamp());
			},
		); */
		db.close();
	},
);
