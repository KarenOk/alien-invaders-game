import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
	getAnalytics,
	logEvent,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {
	getFirestore,
	collection,
	addDoc,
	query,
	orderBy,
	limit,
	getDocs,
	getDoc,
	doc,
	setDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Safe to include config in codebase:
// https://firebase.google.com/support/guides/security-checklist#api-keys-not-secret
// https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
const firebaseConfig = {
	apiKey: "AIzaSyDtUMU8WjqrIYcMtMRFgN4XhduNcLgVXcQ",
	authDomain: "alien-invaders-3ed01.firebaseapp.com",
	databaseURL: "https://alien-invaders-3ed01-default-rtdb.firebaseio.com",
	projectId: "alien-invaders-3ed01",
	storageBucket: "alien-invaders-3ed01.appspot.com",
	messagingSenderId: "51621498331",
	appId: "1:51621498331:web:dede4fdaad870e092b2bfe",
	measurementId: "G-DGFTS42H9Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

/*
 *
 * Storage
 *
 */

function getRandomId() {
	const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
	return uint32.toString(16);
}

class UserStorage {
	constructor() {
		this.usersRef = collection(db, "users");
		this.user = undefined;
	}

	async init() {
		const player = localStorage.getItem("player");
		const playerId = player ? JSON.parse(player)?.id : undefined;
		let user = await this.#get(playerId);

		if (!user) {
			const playerName = `Player-${getRandomId()}`;
			await this.#register(playerName, 0);
		}
	}

	async update(user) {
		let success;

		if (!this.user.id) {
			console.error("No user id to update");
			return;
		}

		try {
			const userRef = doc(db, "users", this.user.id);
			if (user.name !== undefined) {
				const newData = { name: user.name };
				await setDoc(userRef, newData, { merge: true });
				this.#persist({ ...this.user, ...newData });
			}

			if (user.score !== undefined && user.score > this.user.score) {
				const newData = { score: user.score };
				await setDoc(userRef, newData, { merge: true });
				this.#persist({ ...this.user, ...newData });
			}
			success = true;
		} catch (error) {
			console.error("Error in updating user: ", error);
			success = false;
		}

		return success;
	}

	async getLeaderboard(max = 20) {
		const users = [];

		try {
			const q = query(this.usersRef, orderBy("score", "desc"), limit(max));
			const snapshots = await getDocs(q);
			snapshots.forEach((doc) => users.push({ id: doc.id, ...doc.data() }));
		} catch (err) {
			console.error("Error Getting Leaderboard: ", err);
		}

		return users;
	}

	async #register(name, score) {
		const user = { name, score };

		try {
			const docRef = await addDoc(this.usersRef, user);
			user.id = docRef.id;
		} catch (e) {
			console.error("Error adding document: ", e);
		}

		this.#persist(user);
		return user;
	}

	async #get(id) {
		let user;

		if (!id) {
			console.error("No user id to get");
			return;
		}

		try {
			const userRef = doc(db, "users", id);
			const docSnap = await getDoc(userRef);

			if (docSnap.exists()) {
				user = { id: docSnap.id, ...docSnap.data() };
			}
		} catch (error) {
			console.error("Error getting user: ", error);
		}

		this.#persist(user);
		return user;
	}

	#persist(user) {
		this.user = user;
		localStorage.setItem("player", user ? JSON.stringify(user) : undefined);
	}
}

/*
 *
 * Analytics
 *
 */

class Analytics {
	OPEN_LEADERBOARD = "OPEN_LEADERBOARD";
	OPEN_HELP = "OPEN_HELP";
	UPDATE_USERNAME = "UPDATE_USERNAME";
	START_GAME = "START_GAME";
	RESTART_GAME = "RESTART_GAME";
	UPDATE_MUTE_STATUS = "UPDATE_MUTE_STATUS";
	UPDATE_PAUSED_STATUS = "UPDATE_PAUSED_STATUS";
	GITHUB_NAVIGATION = "GITHUB_NAVIGATION";

	openLeaderboard(source) {
		logEvent(analytics, this.OPEN_LEADERBOARD, { source });
	}
	openHelp(source) {
		logEvent(analytics, this.OPEN_HELP, { source });
	}
	updateUsername() {
		logEvent(analytics, this.UPDATE_USERNAME);
	}
	startGame(playerName) {
		logEvent(analytics, this.START_GAME, { playerName });
	}
	restartGame() {
		logEvent(analytics, this.RESTART_GAME);
	}
	updateMuteStatus(source, muted) {
		logEvent(analytics, this.UPDATE_MUTE_STATUS, { muted, source });
	}
	updatePausedStatus(source, paused) {
		logEvent(analytics, this.UPDATE_PAUSED_STATUS, { paused, source });
	}
	githubNavigation() {
		logEvent(analytics, this.GITHUB_NAVIGATION);
	}
}

export { UserStorage, Analytics };
