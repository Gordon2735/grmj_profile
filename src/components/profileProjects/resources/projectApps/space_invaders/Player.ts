/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

import canvas, { ctx } from './index.js';
import BulletController from './BulletController.js';

export default class Player {
    rightPressed = false;
    leftPressed = false;
    shootPressed = false;
    Canvas: HTMLCanvasElement | null;
    velocity: number;
    bulletController: BulletController;
    CTX: CanvasRenderingContext2D | null | undefined;
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement;

    constructor(
        Canvas: HTMLCanvasElement | null | undefined,
        velocity: number,
        bulletController: BulletController
    ) {
        Canvas = canvas as HTMLCanvasElement | null;
        this.CTX = ctx as CanvasRenderingContext2D | null | undefined;

        this.Canvas = Canvas;
        this.velocity = velocity;
        this.bulletController = bulletController;

        this.x = (this.Canvas!.width / 2) as number;
        this.y = (this.Canvas!.height - 75) as number;
        this.width = 50 as number;
        this.height = 48 as number;
        this.image = new Image();
        this.image.src = 'images/player.png';

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }

    draw(CTX: CanvasRenderingContext2D | null | undefined) {
        CTX = this.CTX;
        if (this.shootPressed) {
            this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
        }
        this.move() as void;
        this.collideWithWalls() as void;
        CTX?.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height
        ) as void;
    }

    collideWithWalls(): void {
        //left
        if (this.x < 0) {
            this.x = 0;
        }

        //right
        if (this.x > this.Canvas!.width - this.width) {
            this.x = this.Canvas!.width - this.width;
        }
    }

    move(): void {
        if (this.rightPressed) {
            this.x += this.velocity;
        } else if (this.leftPressed) {
            this.x += -this.velocity;
        }
    }

    keydown = (event: KeyboardEvent): void => {
        if (event.code == 'ArrowRight') {
            this.rightPressed = true;
        }
        if (event.code == 'ArrowLeft') {
            this.leftPressed = true;
        }
        if (event.code == 'Space') {
            this.shootPressed = true;
        }
    };

    keyup = (event: KeyboardEvent): void => {
        if (event.code == 'ArrowRight') {
            this.rightPressed = false;
        }
        if (event.code == 'ArrowLeft') {
            this.leftPressed = false;
        }
        if (event.code == 'Space') {
            this.shootPressed = false;
        }
    };
}
