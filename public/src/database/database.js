'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from 'mongoose';
const grmjDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {});
        console.log(`Transducer's Database is connected to
			${(yield conn).connection.host}`);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
export default grmjDB;
//# sourceMappingURL=database.js.map