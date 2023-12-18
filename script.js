import { UserStorage, Analytics } from "./firebase.js";

/*
 *
 * CONSTANTS
 *
 */

/* General */

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 500;
const ONE_SECOND_MS = 1000;

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
const PROJECTILE_FIREBALL_WIDTH = 36.25;
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
const IMG_SHIELD_FULL_HEIGHT = 190;
const IMG_SHIELD_FULL_WIDTH = 2880;

/* Particles */

const PARTICLE_WIDTH = 50;
const PARTICLE_HEIGHT = 50;
const PARTICLE_GRAVITY = 0.5;
const PARTICLE_MIN_BOUNCE_BOUNDARY = 40;
const PARTICLE_MAX_BOUNCE_BOUNDARY = 110;
const PARTICLE_BOUNCE_MAX_AMOUNT = 3;

/* Ammo */

const AMMO_INCREASE_INTERVAL_MS = 700;
const AMMO_MAX_AMOUNT = 15;

/* Powerup */

const POWERUP_DURATION_MS = 6000;
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

const GAMEOVER_MSG_WIN_MAIN_TEXT = "You Won!";
const GAMEOVER_MSG_WIN_SEC_TEXT = "Open the leaderboard to see where you rank!";
const GAMEOVER_MSG_LOSS_MAIN_TEXT = "Bummer!";
const GAMEOVER_MSG_LOSS_SEC_TEXT = "Better luck next time!";

const WINNING_SCORE = 30;
const GAME_TIME_MAX_MS = 30000;

/* Keys */

const KEY_ARROW_DOWN = "ArrowDown";
const KEY_ARROW_UP = "ArrowUp";
const KEY_ARROW_LEFT = "ArrowLeft";
const KEY_ARROW_RIGHT = "ArrowRight";
const KEY_SPACEBAR = " ";
const KEY_DEBUG = "d";
const KEY_PAUSE = "p";
const KEY_MUTE = "m";

/*  UI */

const PLACEHOLDERS = [
	{ selector: ".placeholder.score", value: WINNING_SCORE },
	{ selector: ".placeholder.timer", value: GAME_TIME_MAX_MS / 1000 },
	{ selector: ".placeholder.lives-angler1", value: ENEMY_ANGLER1_LIVES },
	{ selector: ".placeholder.points-angler1", value: ENEMY_ANGLER1_POINTS },
	{ selector: ".placeholder.lives-angler2", value: ENEMY_ANGLER2_LIVES },
	{ selector: ".placeholder.points-angler2", value: ENEMY_ANGLER2_POINTS },
	{ selector: ".placeholder.lives-stalker", value: ENEMY_STALKER_LIVES },
	{ selector: ".placeholder.points-stalker", value: ENEMY_STALKER_POINTS },
	{ selector: ".placeholder.lives-razorfin", value: ENEMY_STALKER_LIVES },
	{ selector: ".placeholder.points-razorfin", value: ENEMY_STALKER_POINTS },
	{ selector: ".placeholder.lives-bulbwhale", value: ENEMY_BULBWHALE_LIVES },
	{ selector: ".placeholder.points-bulbwhale", value: ENEMY_BULBWHALE_POINTS },
	{ selector: ".placeholder.lives-lucky", value: ENEMY_LUCKY_LIVES },
	{ selector: ".placeholder.points-lucky", value: ENEMY_LUCKY_POINTS },
	{ selector: ".placeholder.lives-moonfish", value: ENEMY_MOONFISH_LIVES },
	{ selector: ".placeholder.points-moonfish", value: ENEMY_MOONFISH_POINTS },
	{ selector: ".placeholder.lives-hivewhale", value: ENEMY_HIVEWHALE_LIVES },
	{ selector: ".placeholder.points-hivewhale", value: ENEMY_HIVEWHALE_POINTS },
	{ selector: ".placeholder.lives-drone", value: ENEMY_DRONE_LIVES },
	{ selector: ".placeholder.points-drone", value: ENEMY_DRONE_POINTS },
	{ selector: ".placeholder.points-drone", value: ENEMY_DRONE_POINTS },
	{
		selector: ".placeholder.drones",
		value: ENEMY_HIVEWHALE_DESTROYED_DRONES_AMOUNT,
	},
];

const MODAL_TYPE_HELP = "help";
const MODAL_TYPE_LEADERBOARD = "leaderboard";

const HELP_GOAL_TAB = "goal";
const HELP_GAME_PLAY_TAB = "game-play";
const HELP_CHARACTERS_TAB = "characters";

/*
 *
 * GAME LOGIC
 *
 */

window.addEventListener("load", async () => {
	const analytics = new Analytics();
	const userStorage = new UserStorage();
	await userStorage.init();

	class InputHandler {
		constructor(game) {
			this.game = game;
			document.addEventListener("keydown", (e) => {
				if (
					!this.game.keys.includes(e.key) &&
					(e.key === KEY_ARROW_DOWN ||
						e.key === KEY_ARROW_UP ||
						e.key === KEY_ARROW_RIGHT ||
						e.key === KEY_ARROW_LEFT)
				) {
					this.game.keys.push(e.key);
				} else if (e.key === KEY_SPACEBAR) {
					if (!this.game.paused) this.game.player.shoot();
				} else if (e.key.toLowerCase() === KEY_DEBUG) {
					this.game.debugMode = !this.game.debugMode;
				} else if (e.key.toLowerCase() === KEY_PAUSE) {
					this.game.paused = !this.game.paused;
					togglePausePlayBtns(this.game.paused);
					analytics.updatePausedStatus("keyboard", this.game.paused);
				} else if (e.key.toLowerCase() === KEY_MUTE) {
					this.game.muted = !this.game.muted;
					toggleMuteUnmuteBtns(this.game.muted);
					analytics.updateMuteStatus("keyboard", this.game.muted);
				}
			});

			document.addEventListener("keyup", (e) => {
				if (this.game.keys.includes(e.key)) {
					this.game.keys = this.game.keys.filter((key) => key !== e.key);
				}
			});
		}
	}

	class SoundController {
		constructor(game) {
			this.game = game;

			this.powerUp = document.getElementById("audioPowerUp");
			this.powerDown = document.getElementById("audioPowerDown");
			this.shot = document.getElementById("audioShot");
			this.explosion = document.getElementById("audioExplosion");
			this.poof = document.getElementById("audioPoof");
			this.shield = document.getElementById("audioShield");
		}

		playPowerUp() {
			if (!this.game.muted) {
				this.powerUp.currentTime = 0;
				this.powerUp.play();
			}
		}

		playPowerDown() {
			if (!this.game.muted) {
				this.powerDown.currentTime = 0;
				this.powerDown.play();
			}
		}

		playShot() {
			if (!this.game.muted) {
				this.shot.currentTime = 0;
				this.shot.play();
			}
		}

		playExplosion() {
			if (!this.game.muted) {
				this.explosion.currentTime = 0;
				this.explosion.play();
			}
		}

		playPoof() {
			if (!this.game.muted) {
				this.poof.currentTime = 0;
				this.poof.play();
			}
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
			this.totalFramesX = IMG_FIREBALL_FULL_WIDTH / PROJECTILE_FIREBALL_WIDTH;

			this.fps = 20;
			this.timer = 0;
			this.interval = ONE_SECOND_MS / this.fps;
		}
		update(deltaTime) {
			this.x += this.speedX;
			if (this.x > this.game.width * 0.9) {
				// don't delete enemies just at the right edge of canvas
				this.markedForDeletion = true;
			}

			if (this.timer >= this.interval) {
				this.timer = 0;
				this.currentFrameX += 1;
				if (this.currentFrameX >= this.totalFramesX) this.currentFrameX = 0;
			} else {
				this.timer += deltaTime;
			}
		}
		draw() {
			this.game.context.fillStyle = "yellow";
			this.game.context.drawImage(
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
		draw() {
			this.game.context.save();
			this.game.context.translate(this.x, this.y);
			this.game.context.rotate(this.angle);

			this.game.context.drawImage(
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
			this.game.context.restore();
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
			this.speedX = PLAYER_SPEED;

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
			this.#updateProjectiles(deltaTime);
			this.#updatePoweredUp(deltaTime);
		}

		draw() {
			this.game.context.fillStyle = "black";

			this.#drawImage();
			this.#drawProjectiles();
		}

		shoot() {
			if (this.game.ammo > 0) {
				this.game.sound.playShot();
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
			this.game.sound.playPowerUp();
			this.poweredUp = true;
			this.poweredUpTimer = 0;
			if (this.game.ammo < this.game.maxAmmo)
				this.game.ammo = this.game.maxAmmo;
		}

		#powerDown() {
			this.game.sound.playPowerDown();
			this.poweredUp = false;
		}

		#handleKeyPress() {
			const canGoUp = this.y > -this.height / 2;
			const canGoDown = this.y < this.game.height - this.height / 2;
			const canGoLeft = this.x > 0;
			const canGoRight = this.x + this.width < this.game.width / 2;

			if (canGoUp && this.game.keys.includes(KEY_ARROW_UP))
				this.y += -this.speedY;
			else if (canGoDown && this.game.keys.includes(KEY_ARROW_DOWN))
				this.y += this.speedY;

			if (canGoLeft && this.game.keys.includes(KEY_ARROW_LEFT))
				this.x += -this.speedX;
			else if (canGoRight && this.game.keys.includes(KEY_ARROW_RIGHT))
				this.x += this.speedX;
		}

		#updateImage() {
			this.currentFrameX += 1;
			if (this.currentFrameX >= this.totalFramesX) {
				this.currentFrameX = 0;
			}
		}

		#drawImage() {
			if (this.game.debugMode) {
				this.game.context.strokeRect(this.x, this.y, this.width, this.height);
			}
			this.game.context.drawImage(
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

		#updateProjectiles(deltaTime) {
			this.projectiles.forEach((projectile) => {
				projectile.update(deltaTime);
			});
			this.projectiles = this.projectiles.filter(
				(projectile) => !projectile.markedForDeletion
			);
		}

		#drawProjectiles() {
			this.projectiles.forEach((projectile) => {
				projectile.draw();
			});
		}

		#updatePoweredUp(deltaTime) {
			if (this.poweredUp) {
				this.poweredUpTimer += deltaTime;
				this.currentFrameY = 1;
				this.game.ammo += POWERUP_AMMO_INCREMENT;
				if (this.poweredUpTimer > POWERUP_DURATION_MS) {
					this.#powerDown();
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

		draw() {
			if (this.game.debugMode) {
				this.game.context.save();
				this.game.context.fillStyle = this.game.context.strokeStyle = "red";
				this.game.context.fillText(
					this.lives,
					this.x,
					this.y - 5,
					this.width,
					this.height
				);
				this.game.context.strokeRect(this.x, this.y, this.width, this.height);
				this.game.context.restore();
			}
			this.game.context.drawImage(
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
			this.speedX = Math.random() * -1.2 - 0.2; // speed: -0.2 -> -1.4

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
			this.speedX = Math.random() * -4 - 2; // speed: -2 -> -6

			this.lives = ENEMY_DRONE_LIVES;
			this.points = ENEMY_DRONE_POINTS;

			this.image = document.getElementById("imgDrone");
			this.totalFramesX = IMG_DRONE_FULL_WIDTH / this.width;
			this.totalFramesY = IMG_DRONE_FULL_HEIGHT / this.height;
			this.currentFrameX = 0;
			this.currentFrameY = Math.floor(Math.random() * this.totalFramesY);
		}
	}

	class BulbWhale extends Enemy {
		constructor(game) {
			super(game);
			this.width = ENEMY_BULBWHALE_WIDTH;
			this.height = ENEMY_BULBWHALE_HEIGHT;
			this.y = Math.random() * (this.game.height - this.height);
			this.speedX = Math.random() * -1.2 - 0.2; // speed: -0.2 -> -1.4

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
			this.interval = ONE_SECOND_MS / this.fps;

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

		draw() {
			this.game.context.drawImage(
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

	class FireExplosion extends Explosion {
		constructor(game, x, y, size) {
			super(game, x, y, size);
			this.image = document.getElementById("imgFireExplosion");
		}
	}

	class Shield {
		constructor(game) {
			this.game = game;
			this.width = PLAYER_WIDTH;
			this.height = PLAYER_HEIGHT;

			this.totalFramesX = IMG_SHIELD_FULL_WIDTH / this.width;
			this.currentFrameY = 0;
			this.currentFrameX = 0;

			this.timer = 0;
			this.fps = 40;
			this.interval = ONE_SECOND_MS / this.fps;
			this.image = document.getElementById("imgShield");

			this.visible = false;
		}

		update(deltaTime) {
			if (this.currentFrameX < this.totalFramesX) {
				if (this.timer < this.interval) {
					this.timer += deltaTime;
				} else {
					this.timer = 0;
					this.currentFrameX++;
				}
			}
		}

		draw() {
			if (this.currentFrameX < this.totalFramesX) {
				this.game.context.drawImage(
					this.image,
					this.currentFrameX * this.width,
					this.currentFrameY,
					this.width,
					this.height,
					this.game.player.x,
					this.game.player.y,
					this.game.player.width,
					this.game.player.height
				);
			}
		}

		hit() {
			this.currentFrameX = 0;
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
		draw() {
			this.game.context.drawImage(this.image, this.x, this.y);
			this.game.context.drawImage(this.image, this.x + this.width, this.y);
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

		draw() {
			this.layers.forEach((layer) => {
				layer.draw();
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

		draw() {
			this.game.context.font = `${this.fontSize}px ${this.fontFamily}`;
			this.game.context.fillStyle = this.color;

			this.game.context.save();
			this.game.context.shadowColor = "black";
			this.game.context.shadowOffsetX = 2;
			this.game.context.shadowOffsetY = 2;

			this.#drawScore();
			this.#drawTimer();
			this.#drawAmmo();
			if (this.game.paused) {
				this.#drawPaused();
			} else {
				this.#drawGameOver();
			}
			this.game.context.restore();
		}

		#drawScore() {
			this.game.context.fillText(
				`Score: ${this.game.score}`,
				DISPLAY_SCORE_OFFSET_X,
				DISPLAY_SCORE_OFFSET_Y,
				this.game.width,
				this.game.height
			);
		}

		#drawGameOver() {
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

			this.game.context.textAlign = "center";
			this.game.context.fillStyle = this.color;

			this.game.context.font = `60px ${this.fontFamily}`;
			this.game.context.fillText(
				mainText,
				this.game.width / 2,
				this.game.height / 2 - DISPLAY_GAMEOVER_TEXT_OFFSET_Y,
				this.game.width,
				this.game.height
			);

			this.game.context.font = `20px ${this.fontFamily}`;
			this.game.context.fillText(
				secText,
				this.game.width / 2,
				this.game.height / 2 + DISPLAY_GAMEOVER_TEXT_OFFSET_Y,
				this.game.width,
				this.game.height
			);
		}

		#drawPaused() {
			this.game.context.textAlign = "center";
			this.game.context.fillColor = this.color;
			this.game.context.font = `60px ${this.fontFamily}`;

			this.game.context.fillText(
				"Paused...",
				this.game.width / 2,
				this.game.height / 2,
				this.game.width,
				this.game.height
			);
		}

		#drawTimer() {
			let timeLeftMs = this.game.maxGameTime - this.game.gameTimer;
			if (timeLeftMs < 0) timeLeftMs = 0;

			if (timeLeftMs < this.game.maxGameTime * 0.2) {
				this.game.context.fillStyle = DISPLAY_TIMER_DANGER_COLOR;
			}

			const formattedTime = (timeLeftMs / ONE_SECOND_MS).toFixed(1);
			this.game.context.fillText(
				`Time left: ${formattedTime}s`,
				DISPLAY_TIMER_OFFSET_X,
				DISPLAY_TIMER_OFFSET_Y,
				this.game.width,
				this.game.height
			);
		}

		#drawAmmo() {
			if (this.game.player.poweredUp)
				this.game.context.fillStyle = DISPLAY_AMMO_POWERUP_COLOR;
			else this.game.context.fillStyle = this.color;

			for (let i = 0; i < this.game.ammo; i++) {
				this.game.context.fillRect(
					DISPLAY_AMMO_OFFSET_X + DISPLAY_AMMO_SPACING * i,
					DISPLAY_AMMO_OFFSET_Y,
					DISPLAY_AMMO_WIDTH,
					DISPLAY_AMMO_HEIGHT
				);
			}
		}
	}

	class Game {
		constructor(width, height, context) {
			this.width = width;
			this.height = height;
			this.context = context;
			this.gameOver = false;
			this.debugMode = false;
			this.speed = 1;
			this.paused = false;
			this.muted = false;

			this.sound = new SoundController(this);
			this.player = new Player(this);
			this.shield = new Shield(this);
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
			this.publishedToLeaderboard = false;
		}

		update(deltaTime) {
			if (this.gameTimer > this.maxGameTime) this.gameOver = true;

			if (this.gameOver && !this.publishedToLeaderboard) {
				this.publishedToLeaderboard = true;
				if (this.score >= WINNING_SCORE) {
					userStorage.update({ score: this.score }); // not waiting for response
				}
			}

			if (!this.paused && !this.gameOver) {
				this.gameTimer += deltaTime;
				this.background.update();
				this.player.update(deltaTime);
				this.shield.update(deltaTime);
				this.#updateAmmo(deltaTime);
				this.#updateExplosions(deltaTime);
				this.#updateEnemies(deltaTime);
				this.#updateParticles();
				this.background.layer4.update();
			}
		}

		draw() {
			this.background.draw();
			this.player.draw();
			this.shield.draw();
			this.#drawParticles();
			this.#drawEnemies();
			this.#drawExplosions();
			this.ui.draw();
			this.background.layer4.draw();
		}

		play() {
			this.paused = false;
		}

		pause() {
			this.paused = true;
		}

		mute() {
			this.muted = true;
		}

		unmute() {
			this.muted = false;
		}

		#checkCollision(rect1, rect2) {
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

		#drawEnemies() {
			this.enemies.forEach((enemy) => {
				enemy.draw();
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
			if (this.#checkCollision(this.player, enemy)) {
				enemy.markedForDeletion = true;
				if (enemy.type === ENEMY_TYPE_LUCKY) {
					this.player.powerUp();
				} else if (this.score > 0) {
					this.score--;
				}
				this.shield.hit();
				this.sound.playPoof();
				this.#addParticles(enemy, ENEMY_DESTROYED_PARTICLES_AMOUNT);
				this.explosions.push(
					new SmokeExplosion(this, enemy.x, enemy.y, enemy.height, enemy.height)
				);
			}
		}

		#handleEnemyProjectilesCollision(enemy) {
			this.player.projectiles.forEach((projectile) => {
				if (this.#checkCollision(projectile, enemy)) {
					projectile.markedForDeletion = true;
					enemy.lives--;

					this.sound.playExplosion();
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

		#drawParticles() {
			this.particles.forEach((particle) => {
				particle.draw();
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

		#drawExplosions() {
			this.explosions.forEach((explosion) => {
				explosion.draw();
			});
		}
	}

	// Setup Game
	const canvas = document.getElementById("canvas");
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;
	const context = canvas.getContext("2d");

	let animationFrameRequestId = null;
	let currentGame = null;

	function startGame() {
		if (animationFrameRequestId) {
			cancelAnimationFrame(animationFrameRequestId);
			animationFrameRequestId = null;
		}

		currentGame = new Game(CANVAS_WIDTH, CANVAS_HEIGHT, context);
		let lastTime;

		function animate(currentTime) {
			if (!lastTime) lastTime = currentTime;
			const deltaTime = currentTime - lastTime;
			lastTime = currentTime;

			context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
			currentGame.update(deltaTime);
			currentGame.draw();
			animationFrameRequestId = requestAnimationFrame(animate);
		}
		animate(0);
	}

	// Setup Modal
	const modal = document.getElementById("modal");
	const modalCloseBtn = document.getElementById("modalClose");
	const modalContentHelp = document.getElementById("help");
	const modalContentLeaderboard = document.getElementById("leaderboard");
	const modalContents = [modalContentHelp, modalContentLeaderboard];

	function hideModal() {
		modal.classList.add("hidden");
		currentGame?.play();
		togglePausePlayBtns(false);
	}

	function showModal(type, source) {
		modal.classList.remove("hidden");
		currentGame?.pause();
		togglePausePlayBtns(true);
		modalContents.forEach((m) => m.classList.add("hidden"));

		if (type === MODAL_TYPE_HELP) {
			modalContentHelp.classList.remove("hidden");
			analytics.openHelp(source);
		} else if (type === MODAL_TYPE_LEADERBOARD) {
			populateLeaderboard();
			modalContentLeaderboard.classList.remove("hidden");
			analytics.openLeaderboard(source);
		}
	}

	modalCloseBtn.addEventListener("click", hideModal);
	window.onclick = function (event) {
		if (event.target == modal) {
			hideModal();
		}
	};

	// Setup Controls
	const splashScreen = document.getElementById("splashscreen");
	const gameScreen = document.getElementById("game");
	const startBtn = document.querySelector(".startBtn");
	const restartBtn = document.querySelector(".restartBtn");
	const helpBtns = document.querySelectorAll(".helpBtn");
	const leaderboardBtns = document.querySelectorAll(".leaderboardBtn");
	const playButton = document.querySelector(".playBtn");
	const pauseButton = document.querySelector(".pauseBtn");
	const muteButton = document.querySelector(".muteBtn");
	const unmuteButton = document.querySelector(".unmuteBtn");

	function togglePausePlayBtns(paused) {
		if (paused) {
			pauseButton.classList.add("hidden");
			playButton.classList.remove("hidden");
		} else {
			playButton.classList.add("hidden");
			pauseButton.classList.remove("hidden");
		}
	}

	function toggleMuteUnmuteBtns(muted) {
		if (muted) {
			muteButton.classList.add("hidden");
			unmuteButton.classList.remove("hidden");
		} else {
			unmuteButton.classList.add("hidden");
			muteButton.classList.remove("hidden");
		}
	}

	function getModalBtnsClickSource(btn) {
		if (btn.parentElement.classList.contains("game-controls")) {
			return "gamescreen";
		}
		if (btn.parentElement.classList.contains("splashscreen__actions")) {
			return "splashscreen";
		}
	}

	const handleStartOrRestartClicked = (e, source) => {
		e.currentTarget.blur();

		splashScreen.classList.add("hidden");
		gameScreen.classList.remove("hidden");
		startGame();

		if (e.currentTarget.classList.contains("restartBtn")) {
			analytics.restartGame();
		} else {
			analytics.startGame(userStorage.user.name);
		}
	};

	const handlePlayOrPauseClicked = (e) => {
		e.currentTarget.blur();

		if (!currentGame) return;
		if (currentGame.paused) currentGame.play();
		else currentGame.pause();

		togglePausePlayBtns(currentGame.paused);
		analytics.updatePausedStatus("button", currentGame.paused);
	};

	const handleMuteOrUnmuteClicked = (e) => {
		e.currentTarget.blur();

		if (!currentGame) return;
		if (currentGame.muted) currentGame.unmute();
		else currentGame.mute();

		toggleMuteUnmuteBtns(currentGame.muted);
		analytics.updateMuteStatus("button", currentGame.muted);
	};

	startBtn.addEventListener("click", handleStartOrRestartClicked);
	restartBtn.addEventListener("click", handleStartOrRestartClicked);
	playButton.addEventListener("click", handlePlayOrPauseClicked);
	pauseButton.addEventListener("click", handlePlayOrPauseClicked);
	unmuteButton.addEventListener("click", handleMuteOrUnmuteClicked);
	muteButton.addEventListener("click", handleMuteOrUnmuteClicked);
	helpBtns.forEach((btn) =>
		btn.addEventListener("click", () =>
			showModal(MODAL_TYPE_HELP, getModalBtnsClickSource(btn))
		)
	);
	leaderboardBtns.forEach((btn) =>
		btn.addEventListener("click", () =>
			showModal(MODAL_TYPE_LEADERBOARD, getModalBtnsClickSource(btn))
		)
	);

	// Setup Username
	const username = document.querySelector(".username");
	const usernameValue = document.querySelectorAll(".username__value");
	const changeUsernameBtn = username.querySelector(".changeUsernameBtn");
	const usernameEntry = username.querySelector(".username__entry");
	const usernameDisplay = username.querySelector(".username__display");
	const usernameForm = username.querySelector(".username__form");

	usernameValue.forEach((el) => {
		el.innerText = userStorage.user.name;
	});
	usernameEntry.value = userStorage.user.name;

	function handleChangeUsernameBtnClicked() {
		usernameForm.classList.remove("hidden");
		usernameDisplay.classList.add("hidden");
	}

	async function handleUsernameSubmit(e) {
		e.preventDefault();
		const name = usernameEntry.value;
		try {
			await userStorage.update({ name });
			usernameValue.forEach((el) => {
				el.innerText = name;
			});
		} catch {
			alert("An error occured, username not saved.");
		}

		usernameForm.classList.add("hidden");
		usernameDisplay.classList.remove("hidden");

		analytics.updateUsername();
	}

	changeUsernameBtn.addEventListener("click", handleChangeUsernameBtnClicked);
	usernameForm.addEventListener("submit", handleUsernameSubmit);

	// Setup Help Modal
	const helpContent = document.querySelector(".help__content");
	const helpNavItems = helpContent.querySelectorAll(".help__nav li");
	const helpTabs = helpContent.querySelectorAll(".help__tab");
	const helpGoalNav = helpContent.querySelector(".help__goal--nav");
	const helpGamePlayNav = helpContent.querySelector(".help__game-play--nav");
	const helpCharactersNav = helpContent.querySelector(".help__characters--nav");
	const helpGoalSection = helpContent.querySelector(".help__goal");
	const helpGamePlaySection = helpContent.querySelector(".help__game-play");
	const helpCharactersSection = helpContent.querySelector(".help__characters");

	helpGoalNav.addEventListener("click", () =>
		handleHelpNavigation(HELP_GOAL_TAB)
	);

	helpGamePlayNav.addEventListener("click", () =>
		handleHelpNavigation(HELP_GAME_PLAY_TAB)
	);

	helpCharactersNav.addEventListener("click", () =>
		handleHelpNavigation(HELP_CHARACTERS_TAB)
	);

	function handleHelpNavigation(tab) {
		helpNavItems.forEach((navItem) => navItem.classList.remove("active"));
		helpTabs.forEach((navItem) => navItem.classList.add("hidden"));

		switch (tab) {
			case HELP_GOAL_TAB: {
				helpGoalNav.classList.add("active");
				helpGoalSection.classList.remove("hidden");
				break;
			}
			case HELP_GAME_PLAY_TAB: {
				helpGamePlayNav.classList.add("active");
				helpGamePlaySection.classList.remove("hidden");
				break;
			}
			case HELP_CHARACTERS_TAB: {
				helpCharactersNav.classList.add("active");
				helpCharactersSection.classList.remove("hidden");
				break;
			}
		}
	}

	PLACEHOLDERS.forEach((placeholder) => {
		helpContent.querySelector(placeholder.selector).innerText =
			placeholder.value;
	});

	//  Setup Leaderboard Modal
	async function populateLeaderboard() {
		const leaderboardData = await userStorage.getLeaderboard();
		const leaderboardContent = document.querySelector(".leaderboard__content");
		const leaderboardTableBody = leaderboardContent.querySelector(
			".leaderboard__table tbody"
		);

		const playerId = userStorage.user.id;
		leaderboardTableBody.innerHTML = leaderboardData.reduce(
			(previousHtml, user, index) => {
				const trophy = index === 0 ? "🏅" : "";
				const html = `
			<tr ${playerId === user.id ? "class='active'" : ""}>
					<td> ${index + 1} ${trophy} </td>
					<td colspan="5">  ${user.name} ${trophy} </td>
					<td>  ${user.score} ${trophy}</td>
			</tr>
			`;

				return previousHtml + html;
			},
			""
		);
	}

	// Setup Banner
	document.querySelector(".github-link").addEventListener("click", () => {
		analytics.githubNavigation();
	});
});
