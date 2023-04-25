/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

import express, { Router } from 'express';
import { adminPanelHandler } from './admin_handlers.js';

const router: Router = express.Router();

router.get('/admin_panel', adminPanelHandler);

export { router };
