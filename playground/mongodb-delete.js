const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
	"mongodb://localhost:27017/TodoApp",
	(err, db) => {
		if (err) {
			return console.log("Unable to connect to Mongo DB server");
		}
		console.log("Connected to mongoDB server.");

		// deleteMany
		// db.collection("Todos")
		// 	.deleteMany({
		// 		text: "Eat Lunch",
		// 	})
		// 	.then(result => {
		// 		console.log(result);
		// 	});

		db.collection("Users")
			.findOneAndDelete({
				_id: new ObjectID("5b3156a16419cbaf7aca7808"),
			})
			.then(result => {
				console.log(JSON.stringify(result, undefined, 2));
			});

		// deleteOne
		// db.collection("Todos")
		// 	.deleteOne({ text: "Eat Lunch" })
		// 	.then(result => {
		// 		console.log(result.result.n);
		// 	});

		// fineOneAndDelete
		// db.collection("Todos")
		// 	.findOneAndDelete({ text: "Eat Lunch" })
		// 	.then(result => {
		// 		console.log(result);
		// 	});

		//	db.close();
	},
);
