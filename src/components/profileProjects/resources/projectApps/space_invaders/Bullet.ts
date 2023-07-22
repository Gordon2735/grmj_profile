/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

import Player from './Player.js';
import BulletController from './BulletController.js';

export default class Bullet {
    player: Player;
    canvas: HTMLCanvasElement | null | undefined;
    bulletController: BulletController | undefined;
    x: number;
    y: number;
    velocity: number;
    bulletColor: string;
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D | null | undefined;

    constructor(
        canvas: HTMLCanvasElement | null | undefined,
        x: number,
        y: number,
        velocity: number,
        bulletColor: string
    ) {
        const bulletControllers = this.bulletController as BulletController;

        this.player = new Player(canvas, velocity, bulletControllers);
        this.canvas = canvas;
        this.ctx = this.player.CTX as
            | CanvasRenderingContext2D
            | null
            | undefined;

        this.x = x as number;
        this.y = y as number;
        this.velocity = velocity as number;
        this.bulletColor = bulletColor;

        this.width = 5;
        this.height = 20;
    }

    draw(ctx: CanvasRenderingContext2D | null | undefined) {
        this.ctx = ctx;
        this.y -= this.velocity;
        this.ctx!.fillStyle = this.bulletColor;
        this.ctx!.fillRect(this.x, this.y, this.width, this.height);
    }

    collideWith(sprite: this): boolean {
        if (
            this.x + this.width > sprite.x &&
            this.x < sprite.x + sprite.width &&
            this.y + this.height > sprite.y &&
            this.y < sprite.y + sprite.height
        ) {
            return true;
        } else {
            return false;
        }
    }
}
