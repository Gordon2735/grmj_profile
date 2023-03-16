'use strict';

import express, { Router, Request, Response, NextFunction } from 'express';

const router: Router = express.Router();

// @desc Partials
const partialsRouter = router.use(
    (_req: Request, res: Response, next: NextFunction) => {
        if (!res.locals.partials) res.locals.partials = {};
        next();
    }
);

export default partialsRouter;
