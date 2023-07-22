/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

import EnemyController from './EnemyController.js';
import Player from './Player.js';
import BulletController from './BulletController.js';

let canvas: HTMLCanvasElement | null = new HTMLCanvasElement();
canvas = document?.querySelector('#game');
canvas!.width = 800;
canvas!.height = 800;

const ctx: CanvasRenderingContext2D | null | undefined =
    canvas?.getContext('2d');

const background: HTMLImageElement = new Image();
background.src = 'images/space.png' as string;

const playerBulletController: BulletController = new BulletController(
    canvas,
    10,
    'red',
    true
);
const enemyBulletController: BulletController = new BulletController(
    canvas,
    4,
    'white',
    false
);
const enemyController: EnemyController = new EnemyController(
    canvas,
    enemyBulletController,
    playerBulletController
);
const player: Player | any = new Player(canvas, 3, playerBulletController);

let isGameOver = false as boolean;
let didWin = false as boolean;

function game(): void {
    checkGameOver();
    ctx?.drawImage(background, 0, 0, canvas!.width, canvas!.height);
    displayGameOver();
    if (!isGameOver) {
        enemyController.draw(ctx);
        player.draw(ctx);
        playerBulletController.draw(ctx);
        enemyBulletController.draw(ctx);
    }
}

function displayGameOver(): void {
    if (isGameOver) {
        const text = didWin ? 'You Win' : 'Game Over';
        const textOffset = didWin ? 3.5 : 5;

        ctx!.fillStyle = 'white';
        ctx!.font = '70px Arial';
        ctx!.fillText(text, canvas!.width / textOffset, canvas!.height / 2);
    }
}

function checkGameOver(): boolean {
    if (isGameOver) {
        return isGameOver;
    }

    if (enemyBulletController.collideWith(player) as boolean) {
        isGameOver = true;
    }

    if (enemyController.collideWith(player) as boolean) {
        isGameOver = true;
    }

    if (enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
    return isGameOver;
}

setInterval(game, 1000 / 60) as NodeJS.Timer;

export { canvas as default, ctx };
