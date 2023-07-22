/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Bullet from './Bullet.js';
import Player from './Player.js';

export default class BulletController {
    bullets = [] as any[];
    timeTillNextBulletAllowed = 0;
    canvas: HTMLCanvasElement | null | undefined;
    maxBulletsAtATime: number;
    bulletColor: string;
    soundEnabled: boolean;
    shootSound: HTMLAudioElement;

    constructor(
        canvas: HTMLCanvasElement | null | undefined,
        maxBulletsAtATime: number,
        bulletColor: string,
        soundEnabled: boolean
    ) {
        this.canvas = canvas;
        this.maxBulletsAtATime = maxBulletsAtATime;
        this.bulletColor = bulletColor;
        this.soundEnabled = soundEnabled;

        this.shootSound = new Audio('sounds/shoot.wav') as HTMLAudioElement;
        this.shootSound.volume = 0.1 as number;
    }

    draw(ctx: CanvasRenderingContext2D | null | undefined): void {
        this.bullets = this.bullets.filter(
            (bullet) =>
                bullet.y + bullet.width > 0 && bullet.y <= this.canvas!.height
        ) as Array<any>;

        this.bullets.forEach((bullet) => bullet.draw(ctx));
        if (this.timeTillNextBulletAllowed > 0) {
            this.timeTillNextBulletAllowed--;
        }
    }

    collideWith(sprite: Player): boolean {
        const bulletThatHitSpriteIndex = this.bullets.findIndex((bullet): any =>
            bullet.collideWith(sprite)
        ) as any;

        if (bulletThatHitSpriteIndex >= 0) {
            this.bullets.splice(bulletThatHitSpriteIndex, 1) as number[];
            return true;
        }

        return false;
    }

    shoot(
        x: number,
        y: number,
        velocity: number,
        timeTillNextBulletAllowed = 0
    ) {
        if (
            this.timeTillNextBulletAllowed <= 0 &&
            this.bullets.length < this.maxBulletsAtATime
        ) {
            const bullet: Bullet = new Bullet(
                this.canvas,
                x,
                y,
                velocity,
                this.bulletColor
            );
            // player: Player;
            this.bullets.push(bullet) as number;
            if (this.soundEnabled) {
                this.shootSound.currentTime = 0;
                this.shootSound.play();
            }
            this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
        }
    }
}
