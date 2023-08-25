import sqlite3 from 'sqlite3';

/**
 * @returns {Promise<sqlite3.Database>}
 */
export async function getDatabase () {
	return new Promise((resolve, reject) => {
		const db = new sqlite3.Database('/data/db.sqlite', (err) => {
			if (err) return reject(err);
			resolve(db);
		});
	});
}

/**
 *
 * @param {string} query
 * @param {Record<string, any>} params
 * @returns {Promise<sqlite3.RunResult>}
 */
export async function runQuery (query, params = {}) {
	const db = await getDatabase();
	return new Promise((resolve, reject) => {
		db.run(query, params, function (err) {
			if (err) return reject(err);
			resolve(this);
		});
	});
}

/**
 *
 * @param {string | undefined} userId
 * @returns
 */
export async function getUser (userId) {
	const db = await getDatabase();
	return new Promise((resolve, reject) => {
		if (!userId) {
			reject(new Error('getUser: Missing userId'))
		}
		db.get('SELECT * FROM users WHERE id = ?', [userId], (err, row) => {
			if (err) return reject(err);
			resolve(row);
		});
	});
}
