'use strict';

import Player from './Player.js';

export default class Enemy {
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement;
    player: Player;

    constructor(x: number, y: number, imageNumber: number) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 28;

        this.image = new Image();
        this.image.src = `images/enemy${imageNumber}.png`;
        this.player = undefined as unknown as Player;
    }

    draw(ctx: CanvasRenderingContext2D | null | undefined) {
        ctx?.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move(xVelocity: number, yVelocity: number) {
        this.x += xVelocity;
        this.y += yVelocity;
    }

    collideWith(sprite: Player) {
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
