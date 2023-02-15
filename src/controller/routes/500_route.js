'use strict';
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
router.use(express_1["default"].static('../../views'));
//%  /500 Error Route
var error500 = router.get('*', function (_req, res) {
    res.status(500);
    res.set('Content-Type', 'text/html');
    res.render('500', { layout: 'errors' });
    res.send('500 Error');
});
exports["default"] = error500;
