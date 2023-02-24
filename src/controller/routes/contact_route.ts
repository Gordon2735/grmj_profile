import express, { Router, Request, Response } from 'express';

const router = express.Router();
router.use(express.static('../../views'));
const contactShellScript = `<script type="module" content="text/javascript" src="/src/components/profileContact/profile-contact_shell.js"></script>`;

//%  /Contact page Route
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let user: any;
const contact: Router = router
    .get('/contact', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('contact', {
            layout: 'main',
            title: 'Contact-Profile',
            script: [`${contactShellScript}`]
        });
    })
    .post('/', async (req: Request, res: Response) => {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    });
export default contact;
