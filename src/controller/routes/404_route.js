'use strict';
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
router.use(express_1["default"].static('../../views'));
//%  /404 Error Route
var error404 = router.get('*', function (_req, res) {
    res.set('Content-Type', 'text/html');
    res.render('404', { layout: 'errors' });
    // res.send('404 Error');
    res.status(404);
});
exports["default"] = error404;
