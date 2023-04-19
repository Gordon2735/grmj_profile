'use strict';

import { Request, Response } from 'express';

// 404 Error Handler
export function error404Handler(_req: Request, res: Response): void {
    try {
        res.set('Content-Type', 'text/html');
        res.render('errors/404', { layout: '404' });
        res.status(404);
    } catch (error: unknown) {
        console.error(`404Handler Error: ${error}`);
    }
}

export async function error500Handler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        res.set('Content-Type', 'text/html');
        res.render('errors/500', { layout: '500' });
        res.status(500);
    } catch (error: unknown) {
        console.error(`500Handler Error: ${error}`);
    }
}
