'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('user_info')
	const res = await collection.add(event)
	return res
};
