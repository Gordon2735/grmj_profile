'use strict';

import mongoose from 'mongoose';

const grmjDB = async (): Promise<void> => {
	try {
		const conn: Promise<typeof mongoose> = mongoose.connect(
			process.env.MONGO_URI as string,
			{
				// useNewUrlParser: true,
				// useUnifiedTopology: true
			}
		);
		console.log(
			`Transducer's Database is connected to
			${(await conn).connection.host}`
		);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

export default grmjDB;
