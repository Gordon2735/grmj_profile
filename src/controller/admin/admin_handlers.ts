/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Request, Response } from 'express';
import LocalUserSchema from '../../models/schemas/User_Schema.js';
import { ensureAuth } from '../middleware/auth.js';

// Admin Panel Route Handlers
export async function adminPanelHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const adminPanelScript = /*html*/ `<script type="module" content="text/javascript" src="/admin/admin_panel.js"></script>`;
        ensureAuth;
        const users: any = await LocalUserSchema.find({})
            .populate({
                path: 'user: User',
                strictPopulate: false
            })
            .sort({ createdAt: 'desc' })
            .lean();
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('admin_panel', {
            layout: 'admin',
            title: 'Administration Panel',
            script: [`${adminPanelScript}`],
            users
        });
        console.info('Admin Panel Rendered');
    } catch (error: unknown) {
        console.error(`adminPanelHandler Error: ${await error}`);
    }
}
