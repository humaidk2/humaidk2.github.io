var db = openDatabase("friends", "1.0", "database for my friends", 2 * 1024 * 1024);
function createDB() {
	db.transaction(
		function (transaction) {
			transaction.executeSql(
			" " +
			"CREATE TABLE IF NOT EXISTS friends(" + 
			"id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
			"user TEXT NOT NULL," +
			"name TEXT NOT NULL," +
			"imageName TEXT NOT NULL" +
			");",
			[],
			function dataHandler(transaction, results) {},
			function errorHandler(transaction, error) {
				console.error("Error creating table: " + error.code + ": " + error.message);
			});
		}
	);
}
function fillDB() {
	db.transaction(
		function (transaction) {
			transaction.executeSql(
				" " +
				"INSERT INTO friends(user, name, imageName) VALUES ('hk2', 'humaid', 'devil.gif');",
				[],
				function dataHandler(transaction, results) {},
				function errorHandler(transaction, error) {
					console.error("Error creating table: " + error.code + ": " + error.message);
			});
		}
	);
}
function checkLogin() {
	var x = window.location.search.split("=");
	var username = x[x.length - 1];
	console.log(username);
	db.transaction(
		function (transaction) {
			transaction.executeSql(
			" " +
			"SELECT * FROM friends WHERE user = ?;",
			[username],
			function dataHandler(transaction, results) {
				console.log(results.rows[0]);
				displayResults(results.rows[0]); 
			},
			function errorHandler(transaction, error) {
				console.error("Error selecting from table: " + error.code + ": " + error.message);
			});
		}
	);
}
function displayResults(results) {
	console.log(results);
	if(results == null) {
		window.location.href = "./login.html";
	}
	var image = document.getElementById("user-image");
	var welcome = document.getElementById("user-welcome");
	var user = document.getElementById("user-name");
	image.src = results.imageName;
	welcome.innerHTML = "Welcome " + results.name;
	user.innerHTML = results.user;
}