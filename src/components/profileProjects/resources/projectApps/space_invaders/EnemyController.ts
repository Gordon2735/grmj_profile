/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Enemy from './Enemy.js';
import MovingDirection from './MovingDirection.js';
import BulletController from './BulletController.js';

export default class EnemyController {
    canvas: HTMLCanvasElement | null | undefined;
    enemyBulletController: EnemyController;
    playerBulletController: EnemyController;
    enemyMap: any[][] = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];
    enemyRows: any[] = [] as any[];
    enemyDeathSound: HTMLAudioElement;

    currentDirection = MovingDirection.right;
    xVelocity = 0;
    yVelocity = 0;
    defaultXVelocity = 1;
    defaultYVelocity = 1;
    moveDownTimerDefault = 30;
    moveDownTimer = this.moveDownTimerDefault;
    fireBulletTimerDefault = 100;
    fireBulletTimer = this.fireBulletTimerDefault;
    bulletController: BulletController;
    shooter: any;

    constructor(
        canvas: HTMLCanvasElement | null | undefined,
        enemyBulletController: any,
        playerBulletController: any
    ) {
        this.canvas = canvas;
        this.enemyBulletController = enemyBulletController;
        this.playerBulletController = playerBulletController;

        this.enemyDeathSound = new Audio(
            'sounds/enemy-death.wav'
        ) as HTMLAudioElement;
        this.enemyDeathSound.volume = 0.1 as number;

        this.createEnemies();

        this.canvas = canvas;
        this.bulletController = new BulletController(
            canvas,
            1,
            'red',
            false
        ) as BulletController;
        this.shooter = this.bulletController.shoot as any;
    }

    draw(ctx: CanvasRenderingContext2D | null | undefined) {
        this.decrementMoveDownTimer();
        this.updateVelocityAndDirection();
        this.collisionDetection();
        this.drawEnemies(ctx);
        this.resetMoveDownTimer();
        this.fireBullet();
    }

    collisionDetection(): void {
        this.enemyRows.forEach((enemyRow): void => {
            enemyRow.forEach((enemy: any, enemyIndex: any) => {
                if (this.playerBulletController.collideWith(enemy)) {
                    this.enemyDeathSound.currentTime = 0 as number;
                    this.enemyDeathSound.play() as Promise<void>;
                    enemyRow.splice(enemyIndex, 1);
                }
            });
        });

        this.enemyRows = this.enemyRows.filter(
            (enemyRow) => enemyRow.length > 0
        );
    }

    fireBullet() {
        this.fireBulletTimer--;
        if (this.fireBulletTimer <= 0) {
            this.fireBulletTimer = this.fireBulletTimerDefault;
            const allEnemies = this.enemyRows.flat();
            const enemyIndex = Math.floor(Math.random() * allEnemies.length);
            const enemy = allEnemies[enemyIndex];
            this.enemyBulletController.shooter(
                enemy.x + enemy.width / 2,
                enemy.y,
                -3
            );
        }
    }

    resetMoveDownTimer() {
        if (this.moveDownTimer <= 0) {
            this.moveDownTimer = this.moveDownTimerDefault;
        }
    }

    decrementMoveDownTimer() {
        if (
            this.currentDirection === MovingDirection.downLeft ||
            this.currentDirection === MovingDirection.downRight
        ) {
            this.moveDownTimer--;
        }
    }

    updateVelocityAndDirection() {
        for (const enemyRow of this.enemyRows) {
            if (this.currentDirection == MovingDirection.right) {
                this.xVelocity = this.defaultXVelocity;
                this.yVelocity = 0;
                const rightMostEnemy = enemyRow[enemyRow.length - 1];
                if (
                    rightMostEnemy.x + rightMostEnemy.width >=
                    this.canvas!.width
                ) {
                    this.currentDirection = MovingDirection.downLeft;
                    break;
                }
            } else if (this.currentDirection === MovingDirection.downLeft) {
                if (this.moveDown(MovingDirection.left)) {
                    break;
                }
            } else if (this.currentDirection === MovingDirection.left) {
                this.xVelocity = -this.defaultXVelocity;
                this.yVelocity = 0;
                const leftMostEnemy = enemyRow[0];
                if (leftMostEnemy.x <= 0) {
                    this.currentDirection = MovingDirection.downRight;
                    break;
                }
            } else if (this.currentDirection === MovingDirection.downRight) {
                if (this.moveDown(MovingDirection.right)) {
                    break;
                }
            }
        }
    }

    moveDown(newDirection: number): boolean {
        this.xVelocity = 0;
        this.yVelocity = this.defaultYVelocity;
        if (this.moveDownTimer <= 0) {
            this.currentDirection = newDirection;
            return true;
        }
        return false;
    }

    drawEnemies(ctx: CanvasRenderingContext2D | null | undefined) {
        this.enemyRows.flat().forEach((enemy) => {
            enemy.move(this.xVelocity, this.yVelocity);
            enemy.draw(ctx);
        });
    }

    happy: () => void = () => {};

    createEnemies(): void {
        this.enemyMap.forEach((row, rowIndex): void => {
            this.enemyRows[rowIndex] = [] as any[];
            row.forEach((enemyNumber, enemyIndex) => {
                if (enemyNumber > 0) {
                    this.enemyRows[rowIndex].push(
                        new Enemy(
                            enemyIndex * 50,
                            rowIndex * 35,
                            enemyNumber
                        ) as Enemy
                    );
                }
            });
        });
    }

    collideWith(sprite: Enemy): boolean {
        return this.enemyRows.flat().some((enemy) => enemy.collideWith(sprite));
    }
}
