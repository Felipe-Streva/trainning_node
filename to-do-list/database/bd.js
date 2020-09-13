const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/todo.db');

process.on('SIGINT', () =>
	bd.close(() => {
		console.log('DB finished');
		process.exit(0);
	})
);

module.exports = db;