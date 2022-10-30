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
import express from 'express';
const router = express.Router();
router.use(express.static('../../views'));
let user;
const home = router
    .get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.render('home');
    console.info(`Home Page Retrieved and has been routed through the Node.js || Nodemon Server,
			Request Data View: ${req}
			Response Data View: ${res}`);
})
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield user.create(req.body).catch((error) => {
        res.status(400),
            console.error(`Whoops, seems there has been a "Page" ERROR: ${error}`);
    }));
    console.info(`Home Page Posted and has been routed through the Node.js || Nodemon Server,
			Request Data View When Posted: ${req}
			Response Data View when Posted: ${res}`);
}));
export default home;
//# sourceMappingURL=home_route.js.map