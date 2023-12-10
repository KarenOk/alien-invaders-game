/*
 *
 * CONSTANTS
 *
 */

/* Canvas */

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

/* Player */

const PLAYER_WIDTH = 120;
const PLAYER_HEIGHT = 190;
const PLAYER_OFFSET_X = 20;
const PLAYER_SPEED = 3;

/* Enemies */

const ENEMY_ANGLER1_WIDTH = 228;
const ENEMY_ANGLER1_HEIGHT = 169;
const ENEMY_ANGLER1_LIVES = 3;
const ENEMY_ANGLER1_POINTS = ENEMY_ANGLER1_LIVES;
const ENEMY_ANGLER2_WIDTH = 213;
const ENEMY_ANGLER2_HEIGHT = 169;
const ENEMY_ANGLER2_LIVES = 3;
const ENEMY_ANGLER2_POINTS = ENEMY_ANGLER2_LIVES;
const ENEMY_LUCKY_WIDTH = 99;
const ENEMY_LUCKY_HEIGHT = 95;
const ENEMY_LUCKY_LIVES = 3;
const ENEMY_LUCKY_POINTS = 15;
const ENEMY_HIVEWHALE_WIDTH = 400;
const ENEMY_HIVEWHALE_HEIGHT = 227;
const ENEMY_HIVEWHALE_LIVES = 10;
const ENEMY_HIVEWHALE_POINTS = ENEMY_HIVEWHALE_LIVES;
const ENEMY_HIVEWHALE_DESTROYED_DRONES_AMOUNT = 3;
const ENEMY_DRONE_WIDTH = 115;
const ENEMY_DRONE_HEIGHT = 95;
const ENEMY_DRONE_LIVES = 1;
const ENEMY_DRONE_POINTS = ENEMY_DRONE_LIVES;
const ENEMY_BULBWHALE_WIDTH = 270;
const ENEMY_BULBWHALE_HEIGHT = 219;
const ENEMY_BULBWHALE_LIVES = 20;
const ENEMY_BULBWHALE_POINTS = ENEMY_BULBWHALE_LIVES;
const ENEMY_MOONFISH_WIDTH = 227;
const ENEMY_MOONFISH_HEIGHT = 240;
const ENEMY_MOONFISH_LIVES = 10;
const ENEMY_MOONFISH_POINTS = ENEMY_MOONFISH_LIVES;
const ENEMY_STALKER_WIDTH = 243;
const ENEMY_STALKER_HEIGHT = 123;
const ENEMY_STALKER_LIVES = 5;
const ENEMY_STALKER_POINTS = ENEMY_STALKER_LIVES;
const ENEMY_RAZORFIN_WIDTH = 187;
const ENEMY_RAZORFIN_HEIGHT = 149;
const ENEMY_RAZORFIN_LIVES = 5;
const ENEMY_RAZORFIN_POINTS = ENEMY_RAZORFIN_LIVES;

const ENEMY_SPAWN_INTERVAL_MS = 3000;
const ENEMY_TYPE_ANGLER = "angler";
const ENEMY_TYPE_LUCKY = "lucky";
const ENEMY_TYPE_HIVEWHALE = "hivewhale";
const ENEMY_TYPE_MOONFISH = "moonfish";
const ENEMY_DESTROYED_PARTICLES_AMOUNT = 3;
const ENEMY_HIT_PARTICLES_AMOUNT = 1;
const ENEMY_EXPLOSION_WIDTH = 200;
const ENEMY_EXPLOSION_HEIGHT = 200;

/* Projectile */

const PROJECTILE_WIDTH = 28;
const PROJECTILE_HEIGHT = 10;
const PROJECTILE_FIREBALL_WIDTH = 37;
const PROJECTILE_FIREBALL_HEIGHT = 20;
const PROJECTILE_OFFSET_X = 98;
const PROJECTILE_TOP_OFFSET_Y = 28;
const PROJECTILE_BOTTOM_OFFSET_Y = 45;
const PROJECTILE_SPEED = 6;

/* Images */

const IMG_LAYER_FULL_WIDTH = 1768;
const IMG_LAYER_FULL_HEIGHT = 500;
const IMG_PLAYER_FULL_WIDTH = 4680;
const IMG_PLAYER_FULL_HEIGHT = 380;
const IMG_ANGLER1_FULL_WIDTH = 8892;
const IMG_ANGLER1_FULL_HEIGHT = 507;
const IMG_ANGLER2_FULL_WIDTH = 8307;
const IMG_ANGLER2_FULL_HEIGHT = 337;
const IMG_LUCKY_FULL_WIDTH = 3861;
const IMG_LUCKY_FULL_HEIGHT = 190;
const IMG_HIVEWHALE_FULL_WIDTH = 15600;
const IMG_HIVEWHALE_FULL_HEIGHT = 227;
const IMG_DRONE_FULL_WIDTH = 4485;
const IMG_DRONE_FULL_HEIGHT = 190;
const IMG_BULBWHALE_FULL_WIDTH = 10530;
const IMG_BULBWHALE_FULL_HEIGHT = 438;
const IMG_MOONFISH_FULL_WIDTH = 8853;
const IMG_MOONFISH_FULL_HEIGHT = 240;
const IMG_STALKER_FULL_WIDTH = 9477;
const IMG_STALKER_FULL_HEIGHT = 123;
const IMG_RAZORFIN_FULL_WIDTH = 7293;
const IMG_RAZORFIN_FULL_HEIGHT = 149;
const IMG_PARTICLES_FULL_WIDTH = 150;
const IMG_PARTICLES_FULL_HEIGHT = 150;
const IMG_FIREBALL_FULL_HEIGHT = 20;
const IMG_FIREBALL_FULL_WIDTH = 145;
const IMG_EXPLOSION_FULL_HEIGHT = 200;
const IMG_EXPLOSION_FULL_WIDTH = 1600;

/* Particles */

const PARTICLE_WIDTH = 50;
const PARTICLE_HEIGHT = 50;
const PARTICLE_GRAVITY = 0.5;
const PARTICLE_MIN_BOUNCE_BOUNDARY = 40;
const PARTICLE_MAX_BOUNCE_BOUNDARY = 110;
const PARTICLE_BOUNCE_MAX_AMOUNT = 3;

/* Ammo */

const AMMO_INCREASE_INTERVAL_MS = 1000;
const AMMO_MAX_AMOUNT = 15;

/* Powerup */

const POWERUP_DURATION_MS = 5000;
const POWERUP_AMMO_INCREMENT = 0.1;

/* Top left Display */

const DISPLAY_FONT_FAMILY = "Special Elite";
const DISPLAY_FONT_SIZE = 16;
const DISPLAY_COLOR = "white";
const DISPLAY_SCORE_OFFSET_X = 20;
const DISPLAY_SCORE_OFFSET_Y = 20;
const DISPLAY_TIMER_OFFSET_X = 20;
const DISPLAY_TIMER_OFFSET_Y = 40;
const DISPLAY_TIMER_DANGER_COLOR = "red";
const DISPLAY_AMMO_OFFSET_X = 22;
const DISPLAY_AMMO_OFFSET_Y = 50;
const DISPLAY_AMMO_WIDTH = 2;
const DISPLAY_AMMO_HEIGHT = 15;
const DISPLAY_AMMO_SPACING = 5;
const DISPLAY_AMMO_POWERUP_COLOR = "#ffffbd";
const DISPLAY_GAMEOVER_TEXT_OFFSET_Y = 20;

/* Game over */

const GAMEOVER_MSG_WIN_MAIN_TEXT = "You Rock!";
const GAMEOVER_MSG_WIN_SEC_TEXT = "You won the game!";
const GAMEOVER_MSG_LOSS_MAIN_TEXT = "Bummer!";
const GAMEOVER_MSG_LOSS_SEC_TEXT = "Better luck next time!";

const WINNING_SCORE = 30;
const GAME_TIME_MAX_MS = 30000;

/* Keys */

const KEY_ARROW_DOWN = "ArrowDown";
const KEY_ARROW_UP = "ArrowUp";
const KEY_SPACEBAR = " ";
const KEY_DEBUG = "d";

/*
 *
 * GAME LOGIC
 *
 */

window.addEventListener("load", () => {
	const canvas = document.getElementById("canvas");
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;
	const context = canvas.getContext("2d");

	class InputHandler {
		constructor(game) {
			this.game = game;
			document.addEventListener("keydown", (e) => {
				if (
					!this.game.keys.includes(e.key) &&
					(e.key === KEY_ARROW_DOWN || e.key === KEY_ARROW_UP)
				) {
					this.game.keys.push(e.key);
				} else if (e.key === KEY_SPACEBAR) {
					this.game.player.shoot();
				} else if (e.key === KEY_DEBUG) {
					this.game.debugMode = !this.game.debugMode;
				}
			});

			document.addEventListener("keyup", (e) => {
				if (this.game.keys.includes(e.key)) {
					this.game.keys = this.game.keys.filter((key) => key !== e.key);
				}
			});
		}
	}

	class Projectile {
		constructor(game, x, y) {
			this.game = game;
			this.x = x + PROJECTILE_OFFSET_X;
			this.y = y + PROJECTILE_TOP_OFFSET_Y;
			this.width = PROJECTILE_FIREBALL_WIDTH;
			this.height = PROJECTILE_FIREBALL_HEIGHT;
			this.speedX = PROJECTILE_SPEED;
			this.markedForDeletion = false;
			this.image = document.getElementById("imgFireball");

			this.currentFrameX = 0;
			this.currentFrameY = 0;
			this.totalFramesX = IMG_FIREBALL_FULL_WIDTH / PROJECTILE_WIDTH;

			this.fps = 20;
			this.timer = 0;
			this.interval = 1000 / this.fps;
		}
		update(deltaTime) {
			this.x += this.speedX;
			if (this.x > this.game.width * 0.9) {
				// don't delete enemies just at the right edge of canvas
				this.markedForDeletion = true;
			}

			if (this.timer >= this.interval) {
				this.timer = 0;
				if (this.currentFrameX < this.totalFramesX) this.currentFrameX++;
				else this.currentFrameX = 0;
			} else {
				this.timer += deltaTime;
			}
		}
		draw(context) {
			context.fillStyle = "yellow";
			context.drawImage(
				this.image,
				this.currentFrameX * this.width,
				this.currentFrameY,
				this.width,
				this.height,
				this.x,
				this.y,
				this.width,
				this.height
			);
		}
	}

	class Particle {
		constructor(game, x, y) {
			this.game = game;
			this.x = x;
			this.y = y;
			this.size = Math.floor(
				(Math.random() * PARTICLE_WIDTH) / 2 + PARTICLE_WIDTH / 2
			);
			this.speedX = Math.random() * 6 - 3; // speed = -3 to 3
			this.speedY = Math.random() * -15; // speed = -15 to 0;
			this.gravity = PARTICLE_GRAVITY;
			this.angle = 0;
			this.angularVelocity = Math.random() * 0.3 - 0.1; // rate at which the angle changes per animation frame. angularVelocity = -0.1 to 0.2

			this.totalFramesX = IMG_PARTICLES_FULL_WIDTH / PARTICLE_WIDTH;
			this.totalFramesY = IMG_PARTICLES_FULL_HEIGHT / PARTICLE_HEIGHT;
			this.currentFrameX = Math.floor(Math.random() * this.totalFramesX);
			this.currentFrameY = Math.floor(Math.random() * this.totalFramesY);

			this.image = document.getElementById("imgGears");
			this.markedForDeletion = false;

			this.bounced = 0;
			this.bounceBoundary =
				Math.random() *
					(PARTICLE_MAX_BOUNCE_BOUNDARY - PARTICLE_MIN_BOUNCE_BOUNDARY) +
				PARTICLE_MIN_BOUNCE_BOUNDARY;
		}
		update() {
			this.speedY += this.gravity;
			this.x += this.speedX - this.game.speed;
			this.y += this.speedY;
			this.angle += this.angularVelocity;

			if (
				this.bounced < PARTICLE_BOUNCE_MAX_AMOUNT &&
				this.y + this.size > this.game.height - this.bounceBoundary
			) {
				this.bounced++;
				this.speedY *= -0.9;
			}

			if (
				this.x < 0 - this.size ||
				this.x > this.game.width + this.size ||
				this.y < 0 - this.size ||
				this.y > this.game.height + this.size - this.dropHeight
			) {
				this.markedForDeletion = true;
			}
		}
		draw(context) {
			context.save();
			context.translate(this.x, this.y);
			context.rotate(this.angle);

			context.drawImage(
				this.image,
				this.currentFrameX * PARTICLE_WIDTH,
				this.currentFrameY * PARTICLE_HEIGHT,
				PARTICLE_WIDTH,
				PARTICLE_HEIGHT,
				-this.size / 2,
				-this.size / 2,
				this.size,
				this.size
			);
			context.restore();
		}
	}

	class Player {
		constructor(game) {
			this.game = game;
			this.width = PLAYER_WIDTH;
			this.height = PLAYER_HEIGHT;
			this.x = PLAYER_OFFSET_X;
			this.y = this.game.height / 3;
			this.speedY = PLAYER_SPEED;

			this.image = document.getElementById("imgPlayer");
			this.currentFrameX = 0;
			this.currentFrameY = 0;
			this.totalFramesX = IMG_PLAYER_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_PLAYER_FULL_HEIGHT / this.height;

			this.projectiles = [];

			this.poweredUp = false;
			this.poweredUpTimer = 0;
		}

		update(deltaTime) {
			this.#handleKeyPress();
			this.#updateImage();
			this.#updateProjectiles();
			this.#updatePoweredUp(deltaTime);
		}

		draw(context) {
			context.fillStyle = "black";

			this.#drawImage();
			this.#drawProjectiles();
		}

		shoot() {
			if (this.game.ammo > 0) {
				this.projectiles.push(new Projectile(this.game, this.x, this.y));
				if (this.poweredUp) {
					this.projectiles.push(
						new Projectile(
							this.game,
							this.x,
							this.y + this.height - PROJECTILE_BOTTOM_OFFSET_Y
						)
					);
				}
				this.game.ammo--;
			}
		}

		powerUp() {
			this.poweredUp = true;
			this.poweredUpTimer = 0;
			if (this.game.ammo < this.game.maxAmmo)
				this.game.ammo = this.game.maxAmmo;
		}

		#handleKeyPress() {
			const canGoUp = this.y > -this.height / 2;
			const canGoDown = this.y < this.game.height - this.height / 2;

			if (canGoUp && this.game.keys.includes(KEY_ARROW_UP))
				this.y += -this.speedY;
			else if (canGoDown && this.game.keys.includes(KEY_ARROW_DOWN))
				this.y += this.speedY;
			else if (this.game.keys.includes(KEY_SPACEBAR)) {
				this.shoot();
			}
		}

		#updateImage() {
			this.currentFrameX += 1;
			if (this.currentFrameX >= this.totalFramesX) {
				this.currentFrameX = 0;
			}
		}

		#drawImage() {
			if (this.game.debugMode) {
				context.strokeRect(this.x, this.y, this.width, this.height);
			}
			context.drawImage(
				this.image,
				this.currentFrameX * this.width,
				this.currentFrameY * this.height,
				this.width,
				this.height,
				this.x,
				this.y,
				this.width,
				this.height
			);
		}

		#updateProjectiles() {
			this.projectiles.forEach((projectile) => {
				projectile.update(context);
			});
			this.projectiles = this.projectiles.filter(
				(projectile) => !projectile.markedForDeletion
			);
		}

		#drawProjectiles() {
			this.projectiles.forEach((projectile) => {
				projectile.draw(context);
			});
		}

		#updatePoweredUp(deltaTime) {
			if (this.poweredUp) {
				this.poweredUpTimer += deltaTime;
				this.currentFrameY = 1;
				this.game.ammo += POWERUP_AMMO_INCREMENT;
				if (this.poweredUpTimer > POWERUP_DURATION_MS) {
					this.poweredUp = false;
				}
			}

			if (!this.poweredUp) {
				this.poweredUpTimer = 0;
				this.currentFrameY = 0;
			}
		}
	}

	class Enemy {
		constructor(game) {
			this.game = game;
			this.x = this.game.width;
			this.speedX = -0.5 - Math.random() * 1.5; // speed -0.5 -> -2
			this.markedForDeletion = false;
		}

		update() {
			this.x += this.speedX;
			if (this.x + this.width < 0) this.markedForDeletion = true;

			this.currentFrameX += 1;
			if (this.currentFrameX >= this.totalFramesX) this.currentFrameX = 0;
		}

		draw(context) {
			if (this.game.debugMode) {
				context.save();
				context.fillStyle = context.strokeStyle = "red";
				context.fillText(
					this.lives,
					this.x,
					this.y - 5,
					this.width,
					this.height
				);
				context.strokeRect(this.x, this.y, this.width, this.height);
				context.restore();
			}
			context.drawImage(
				this.image,
				this.currentFrameX * this.width,
				this.currentFrameY * this.height,
				this.width,
				this.height,
				this.x,
				this.y,
				this.width,
				this.height
			);
		}
	}

	class Angler1 extends Enemy {
		constructor(game) {
			super(game);
			this.type = ENEMY_TYPE_ANGLER;
			this.width = ENEMY_ANGLER1_WIDTH;
			this.height = ENEMY_ANGLER1_HEIGHT;
			this.y = Math.random() * (this.game.height - this.height);

			this.lives = ENEMY_ANGLER1_LIVES;
			this.points = ENEMY_ANGLER1_POINTS;

			this.image = document.getElementById("imgAngler1");
			this.totalFramesX = IMG_ANGLER1_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_ANGLER1_FULL_HEIGHT / this.height;
			this.currentFrameX = 0;
			this.currentFrameY = Math.floor(Math.random() * this.totalFramesY);
		}
	}

	class Angler2 extends Enemy {
		constructor(game) {
			super(game);
			this.type = ENEMY_TYPE_ANGLER;
			this.width = ENEMY_ANGLER2_WIDTH;
			this.height = ENEMY_ANGLER2_HEIGHT;
			this.y = Math.random() * (this.game.height - this.height);

			this.lives = ENEMY_ANGLER2_LIVES;
			this.points = ENEMY_ANGLER2_POINTS;

			this.image = document.getElementById("imgAngler2");
			this.totalFramesX = IMG_ANGLER2_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_ANGLER2_FULL_HEIGHT / this.height;
			this.currentFrameX = 0;
			this.currentFrameY = Math.floor(Math.random() * this.totalFramesY);
		}
	}

	class RazorFin extends Enemy {
		constructor(game) {
			super(game);
			this.width = ENEMY_RAZORFIN_WIDTH;
			this.height = ENEMY_RAZORFIN_HEIGHT;
			this.y = Math.random() * (this.game.height - this.height);
			this.speedX = Math.random() * -1 - 1; // speed: -1 -> -2

			this.lives = ENEMY_RAZORFIN_LIVES;
			this.points = ENEMY_RAZORFIN_POINTS;

			this.image = document.getElementById("imgRazorFin");
			this.totalFramesX = IMG_RAZORFIN_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_RAZORFIN_FULL_HEIGHT / this.height;
			this.currentFrameX = 0;
			this.currentFrameY = 0;
		}
	}

	class Stalker extends Enemy {
		constructor(game) {
			super(game);
			this.width = ENEMY_STALKER_WIDTH;
			this.height = ENEMY_STALKER_HEIGHT;
			this.y = Math.random() * (this.game.height - this.height);
			this.speedX = Math.random() * -1 - 1; // speed: -1 -> -2

			this.lives = ENEMY_STALKER_LIVES;
			this.points = ENEMY_STALKER_POINTS;

			this.image = document.getElementById("imgStalker");
			this.totalFramesX = IMG_STALKER_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_STALKER_FULL_HEIGHT / this.height;
			this.currentFrameX = 0;
			this.currentFrameY = 0;
		}
	}

	class Lucky extends Enemy {
		constructor(game) {
			super(game);
			this.type = ENEMY_TYPE_LUCKY;
			this.width = ENEMY_LUCKY_WIDTH;
			this.height = ENEMY_LUCKY_HEIGHT;
			this.y = Math.random() * (this.game.height - this.height);

			this.lives = ENEMY_LUCKY_LIVES;
			this.points = ENEMY_LUCKY_POINTS;

			this.image = document.getElementById("imgLucky");
			this.totalFramesX = IMG_LUCKY_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_LUCKY_FULL_HEIGHT / this.height;
			this.currentFrameX = 0;
			this.currentFrameY = Math.floor(Math.random()) * 2;
		}
	}

	class HiveWhale extends Enemy {
		constructor(game) {
			super(game);
			this.type = ENEMY_TYPE_HIVEWHALE;
			this.width = ENEMY_HIVEWHALE_WIDTH;
			this.height = ENEMY_HIVEWHALE_HEIGHT;
			this.y = Math.random() * (this.game.height - this.height);
			this.speedX = Math.random() * -1.2 - 0.2; // speed: -0.2 -> -1.2

			this.lives = ENEMY_HIVEWHALE_LIVES;
			this.points = ENEMY_HIVEWHALE_POINTS;

			this.image = document.getElementById("imgHiveWhale");
			this.totalFramesX = IMG_HIVEWHALE_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_HIVEWHALE_FULL_HEIGHT / this.height;
			this.currentFrameX = 0;
			this.currentFrameY = 0;
		}
	}

	class Drone extends Enemy {
		constructor(game, x, y) {
			super(game);
			this.x = x;
			this.y = y;
			this.width = ENEMY_DRONE_WIDTH;
			this.height = ENEMY_DRONE_HEIGHT;
			this.speedX = Math.random() * -5 - 1; // speed: -1 -> -5

			this.lives = ENEMY_DRONE_LIVES;
			this.points = ENEMY_DRONE_POINTS;

			this.image = document.getElementById("imgDrone");
			this.totalFramesX = IMG_DRONE_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_DRONE_FULL_HEIGHT / this.height;
			this.currentFrameX = 0;
			this.currentFrameY = Math.floor(Math.random() * this.totalFramesY);
		}
	}

	class Explosion {
		constructor(game, x, y, size) {
			this.game = game;
			this.x = x;
			this.y = y;
			this.size = size;

			this.currentFrameX = 0;
			this.currentFrameY = 0;
			this.totalFramesX = IMG_EXPLOSION_FULL_WIDTH / this.size;

			this.timer = 0;
			this.fps = 15;
			this.interval = 1000 / this.fps;

			this.markedForDeletion = false;
		}

		update(deltaTime) {
			if (this.timer > this.interval) {
				this.timer = 0;
				if (this.currentFrameX < this.totalFramesX) this.currentFrameX++;
				else this.markedForDeletion = true;
			} else {
				this.timer += deltaTime;
			}
		}

		draw(context) {
			context.drawImage(
				this.image,
				this.currentFrameX * ENEMY_EXPLOSION_WIDTH,
				this.currentFrameY,
				ENEMY_EXPLOSION_WIDTH,
				ENEMY_EXPLOSION_HEIGHT,
				this.x,
				this.y,
				this.size,
				this.size
			);
		}
	}

	class SmokeExplosion extends Explosion {
		constructor(game, x, y, size) {
			super(game, x, y, size);
			this.image = document.getElementById("imgSmokeExplosion");
		}
	}

	class BulbWhale extends Enemy {
		constructor(game) {
			super(game);
			this.width = ENEMY_BULBWHALE_WIDTH;
			this.height = ENEMY_BULBWHALE_HEIGHT;
			this.y = Math.random() * (this.game.height - this.height);
			this.speedX = Math.random() * -1.2 - 0.2; // speed: -0.2 -> -1.2

			this.lives = ENEMY_BULBWHALE_LIVES;
			this.points = ENEMY_BULBWHALE_POINTS;

			this.image = document.getElementById("imgBulbWhale");
			this.totalFramesX = IMG_BULBWHALE_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_BULBWHALE_FULL_HEIGHT / this.height;
			this.currentFrameX = 0;
			this.currentFrameY = 0;
		}
	}

	class MoonFish extends Enemy {
		constructor(game) {
			super(game);
			this.type = ENEMY_TYPE_MOONFISH;
			this.width = ENEMY_MOONFISH_WIDTH;
			this.height = ENEMY_MOONFISH_HEIGHT;
			this.y = Math.random() * (this.game.height - this.height);
			this.speedX = Math.random() * -1.2 - 2; // speed: -2 -> -3.2

			this.lives = ENEMY_MOONFISH_LIVES;
			this.points = ENEMY_MOONFISH_POINTS;

			this.image = document.getElementById("imgMoonFish");
			this.totalFramesX = IMG_MOONFISH_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_MOONFISH_FULL_HEIGHT / this.height;
			this.currentFrameX = 0;
			this.currentFrameY = 0;
		}
	}

	class FireExplosion extends Explosion {
		constructor(game, x, y, size) {
			super(game, x, y, size);
			this.image = document.getElementById("imgFireExplosion");
		}
	}

	class Layer {
		constructor(game, image, speedX) {
			this.game = game;
			this.image = image;
			this.speedX = -speedX * this.game.speed;
			this.width = IMG_LAYER_FULL_WIDTH;
			this.height = IMG_LAYER_FULL_HEIGHT;
			this.x = 0;
			this.y = 0;
		}
		update() {
			this.x += this.speedX; // may need a multiplier with game speed in power up mode
			if (this.x < -this.width) this.x = 0;
		}
		draw(context) {
			context.drawImage(this.image, this.x, this.y);
			context.drawImage(this.image, this.x + this.width, this.y);
		}
	}

	class Background {
		constructor(game) {
			this.game = game;

			this.layer1 = new Layer(
				this.game,
				document.getElementById("imgLayer1"),
				0.2
			);
			this.layer2 = new Layer(
				this.game,
				document.getElementById("imgLayer2"),
				0.3
			);
			this.layer3 = new Layer(
				this.game,
				document.getElementById("imgLayer3"),
				1
			);
			this.layer4 = new Layer(
				this.game,
				document.getElementById("imgLayer4"),
				1.3
			);
			this.layers = [this.layer1, this.layer2, this.layer3];
		}

		update() {
			this.layers.forEach((layer) => {
				layer.update();
			});
		}

		draw(context) {
			this.layers.forEach((layer) => {
				layer.draw(context);
			});
		}
	}

	class UI {
		constructor(game) {
			this.game = game;

			this.fontFamily = DISPLAY_FONT_FAMILY;
			this.color = DISPLAY_COLOR;
			this.fontSize = DISPLAY_FONT_SIZE;
		}

		draw(context) {
			context.font = `${this.fontSize}px ${this.fontFamily}`;
			context.fillStyle = this.color;

			context.save();
			context.shadowColor = "black";
			context.shadowOffsetX = 2;
			context.shadowOffsetY = 2;

			this.#drawScore(context);
			this.#drawTimer(context);
			this.#drawAmmo(context);
			this.#drawGameOver(context);

			context.restore();
		}

		#drawScore(context) {
			context.fillText(
				`Score: ${this.game.score}`,
				DISPLAY_SCORE_OFFSET_X,
				DISPLAY_SCORE_OFFSET_Y,
				this.game.width,
				this.game.height
			);
		}

		#drawGameOver(context) {
			if (!this.game.gameOver) return;

			let mainText;
			let secText;

			if (this.game.score >= this.game.winningScore) {
				mainText = GAMEOVER_MSG_WIN_MAIN_TEXT;
				secText = GAMEOVER_MSG_WIN_SEC_TEXT;
			} else {
				mainText = GAMEOVER_MSG_LOSS_MAIN_TEXT;
				secText = GAMEOVER_MSG_LOSS_SEC_TEXT;
			}

			context.textAlign = "center";
			context.fillStyle = this.color;

			context.font = `60px ${this.fontFamily}`;
			context.fillText(
				mainText,
				this.game.width / 2,
				this.game.height / 2 - DISPLAY_GAMEOVER_TEXT_OFFSET_Y,
				this.game.width,
				this.game.height
			);

			context.font = `20px ${this.fontFamily}`;
			context.fillText(
				secText,
				this.game.width / 2,
				this.game.height / 2 + DISPLAY_GAMEOVER_TEXT_OFFSET_Y,
				this.game.width,
				this.game.height
			);
		}

		#drawTimer(context) {
			let timeLeftMs = this.game.maxGameTime - this.game.gameTimer;
			if (timeLeftMs < 0) timeLeftMs = 0;

			if (timeLeftMs < this.game.maxGameTime * 0.2) {
				context.fillStyle = DISPLAY_TIMER_DANGER_COLOR;
			}

			const formattedTime = (timeLeftMs / 1000).toFixed(1);
			context.fillText(
				`Time left: ${formattedTime}s`,
				DISPLAY_TIMER_OFFSET_X,
				DISPLAY_TIMER_OFFSET_Y,
				this.game.width,
				this.game.height
			);
		}

		#drawAmmo(context) {
			if (this.game.player.poweredUp)
				context.fillStyle = DISPLAY_AMMO_POWERUP_COLOR;
			else context.fillStyle = this.color;

			for (let i = 0; i < this.game.ammo; i++) {
				context.fillRect(
					DISPLAY_AMMO_OFFSET_X + DISPLAY_AMMO_SPACING * i,
					DISPLAY_AMMO_OFFSET_Y,
					DISPLAY_AMMO_WIDTH,
					DISPLAY_AMMO_HEIGHT
				);
			}
		}
	}

	class Game {
		constructor(width, height) {
			this.width = width;
			this.height = height;
			this.gameOver = false;
			this.debugMode = false;
			this.speed = 1;

			this.player = new Player(this);
			this.inputHandler = new InputHandler(this);
			this.ui = new UI(this);
			this.background = new Background(this);

			this.keys = [];
			this.enemies = [];
			this.particles = [];
			this.explosions = [];

			this.score = 0;
			this.maxAmmo = AMMO_MAX_AMOUNT;
			this.ammo = this.maxAmmo;

			this.gameTimer = 0;
			this.ammoTimer = 0;
			this.enemyTimer = 0;

			this.winningScore = WINNING_SCORE;
			this.maxGameTime = GAME_TIME_MAX_MS;
		}

		update(deltaTime) {
			if (this.gameTimer > this.maxGameTime) this.gameOver = true;

			if (!this.gameOver) {
				this.gameTimer += deltaTime;
				this.background.update();
				this.player.update(deltaTime);
				this.#updateAmmo(deltaTime);
				this.#updateExplosions(deltaTime);
				this.#updateEnemies(deltaTime);
				this.#updateParticles();
				this.background.layer4.update();
			}
		}

		draw() {
			this.background.draw(context);
			this.player.draw(context);
			this.#drawParticles(context);
			this.#drawEnemies(context);
			this.#drawExplosions(context);
			this.ui.draw(context);
			this.background.layer4.draw(context);
		}

		checkCollision(rect1, rect2) {
			return (
				rect1.x < rect2.x + rect2.width &&
				rect2.x < rect1.x + rect1.width &&
				rect1.y < rect2.y + rect2.height &&
				rect2.y < rect1.y + rect1.height
			);
		}

		#updateAmmo(deltaTime) {
			if (this.ammoTimer > AMMO_INCREASE_INTERVAL_MS) {
				this.ammoTimer = 0;
				if (this.ammo < AMMO_MAX_AMOUNT) this.ammo++;
			} else {
				this.ammoTimer += deltaTime;
			}
		}

		#updateEnemies(deltaTime) {
			this.enemies.forEach((enemy) => {
				enemy.update();
				this.#handleEnemyPlayerCollision(enemy);
				this.#handleEnemyProjectilesCollision(enemy);
			});
			this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);

			if (this.enemyTimer > ENEMY_SPAWN_INTERVAL_MS) {
				this.enemyTimer = 0;
				this.#addEnemy();
			} else {
				this.enemyTimer += deltaTime;
			}
		}

		#drawEnemies(context) {
			this.enemies.forEach((enemy) => {
				enemy.draw(context);
			});
		}

		#addEnemy() {
			let EnemyClass;
			const seed = Math.random();

			if (seed < 0.2) EnemyClass = Angler1;
			else if (seed < 0.4) EnemyClass = Angler2;
			else if (seed < 0.5) EnemyClass = RazorFin;
			else if (seed < 0.6) EnemyClass = Stalker;
			else if (seed < 0.7) EnemyClass = HiveWhale;
			else if (seed < 0.8) EnemyClass = BulbWhale;
			else if (seed < 0.9) EnemyClass = MoonFish;
			else EnemyClass = Lucky;

			this.enemies.push(new EnemyClass(this));
		}

		#addDrones(enemy) {
			for (let i = 0; i < ENEMY_HIVEWHALE_DESTROYED_DRONES_AMOUNT; i++) {
				const droneX = enemy.x + (Math.random() * enemy.width) / 3;
				const droneY = enemy.y + (Math.random() * enemy.height) / 3;
				this.enemies.push(new Drone(this, droneX, droneY));
			}
		}

		#handleEnemyPlayerCollision(enemy) {
			if (this.checkCollision(this.player, enemy)) {
				enemy.markedForDeletion = true;
				if (enemy.type === ENEMY_TYPE_LUCKY) {
					this.player.powerUp();
				} else if (this.score > 0) {
					this.score--;
				}
				this.#addParticles(enemy, ENEMY_DESTROYED_PARTICLES_AMOUNT);
				this.explosions.push(
					new SmokeExplosion(this, enemy.x, enemy.y, enemy.height, enemy.height)
				);
			}
		}

		#handleEnemyProjectilesCollision(enemy) {
			this.player.projectiles.forEach((projectile) => {
				if (this.checkCollision(projectile, enemy)) {
					projectile.markedForDeletion = true;

					enemy.lives--;
					if (enemy.lives === 0) {
						this.#addParticles(enemy, ENEMY_DESTROYED_PARTICLES_AMOUNT);
						enemy.markedForDeletion = true;
						this.score += enemy.points;
						this.explosions.push(
							new FireExplosion(
								this,
								enemy.x,
								enemy.y,
								enemy.height,
								enemy.height
							)
						);
						if (enemy.type === ENEMY_TYPE_HIVEWHALE) {
							this.#addDrones(enemy);
						} else if (enemy.type === ENEMY_TYPE_MOONFISH) {
							this.player.powerUp();
						}
					} else {
						this.#addParticles(enemy, ENEMY_HIT_PARTICLES_AMOUNT);
					}
				}
			});
		}

		#addParticles(enemy, numberOfParticles) {
			for (let i = 0; i < numberOfParticles; i++) {
				this.particles.push(
					new Particle(
						this,
						enemy.x + enemy.width / 2,
						enemy.y + enemy.height / 2
					)
				);
			}
		}

		#updateParticles() {
			this.particles.forEach((particle) => {
				particle.update();
			});
			this.particles = this.particles.filter(
				(particle) => !particle.markedForDeletion
			);
		}

		#drawParticles(context) {
			this.particles.forEach((particle) => {
				particle.draw(context);
			});
		}

		#updateExplosions(deltaTime) {
			this.explosions.forEach((explosion) => {
				explosion.update(deltaTime);
			});
			this.explosions = this.explosions.filter(
				(explosion) => !explosion.markedForDeletion
			);
		}

		#drawExplosions(context) {
			this.explosions.forEach((explosion) => {
				explosion.draw(context);
			});
		}
	}

	function startGame() {
		const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);
		let lastTime = 0;

		function animate(currentTime) {
			const deltaTime = currentTime - lastTime;
			lastTime = currentTime;

			context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
			game.update(deltaTime);
			game.draw();
			requestAnimationFrame(animate);
		}
		animate(0);
	}

	startGame();
});
