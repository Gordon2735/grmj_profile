'use strict';

import { Request, Response } from 'express';

// Admin Panel Route Handlers
export async function adminPanelHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const adminPanelScript = /*html*/ `<script type="module" content="text/javascript" src="/admin/admin_panel.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('admin_panel', {
            layout: 'admin',
            title: 'Administration Panel',
            script: [`${adminPanelScript}`]
        });
        console.info('Admin Panel Rendered');
    } catch (error: unknown) {
        console.error(`adminPanelHandler Error: ${await error}`);
    }
}
