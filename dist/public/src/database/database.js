'use strict';
import mongoose from 'mongoose';
const grmjDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {});
        console.log(`Transducer's Database is connected to
			${(await conn).connection.host}`);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
export default grmjDB;
//# sourceMappingURL=database.js.map