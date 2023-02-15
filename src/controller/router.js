"use strict";
exports.__esModule = true;
var express_1 = require("express");
var home_route_js_1 = require("./routes/home_route.js");
var cover_route_js_1 = require("./routes/cover_route.js");
var about_route_js_1 = require("./routes/about_route.js");
var history_route_js_1 = require("./routes/history_route.js");
var resume_route_js_1 = require("./routes/resume_route.js");
var projects_route_js_1 = require("./routes/projects_route.js");
var code_examples_route_js_1 = require("./routes/code_examples_route.js");
var goals_route_js_1 = require("./routes/goals_route.js");
var contact_route_js_1 = require("./routes/contact_route.js");
var library_route_js_1 = require("./routes/library_route.js");
var spacex_route_js_1 = require("./routes/spacex_route.js");
var _404_route_js_1 = require("./routes/404_route.js");
var _500_route_js_1 = require("./routes/500_route.js");
var router = express_1["default"].Router();
router.use(express_1["default"].static('./routes'));
router.use('/', home_route_js_1["default"]);
router.use('/', cover_route_js_1["default"]);
router.use('/', about_route_js_1["default"]);
router.use('/', history_route_js_1["default"]);
router.use('/', resume_route_js_1["default"]);
router.use('/', projects_route_js_1["default"]);
router.use('/', code_examples_route_js_1["default"]);
router.use('/', goals_route_js_1["default"]);
router.use('/', contact_route_js_1["default"]);
router.use('/', library_route_js_1["default"]);
router.use('/', spacex_route_js_1["default"]);
router.use('/', _404_route_js_1["default"]);
router.use('/', _500_route_js_1["default"]);
router.use(function (_req, res, next) {
    if (!res.locals.partials)
        res.locals.partials = {};
    next();
});
exports["default"] = router;
