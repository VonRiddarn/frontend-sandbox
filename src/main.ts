import { Scene } from "./scenemanager/Scene";
import SceneManager from "./scenemanager/SceneManager";

console.log("Hello world!");

let user = new User("John Doe", 42);

let admin = new Admin("Peter Parker", 23);

console.log(user.toString());

console.log(user.invokePrivateMethod());

console.log(user.invokeInheritedMethod());

console.log(admin.invokeInheritedMethod());

const scenemanager = new SceneManager();

scenemanager.initializeScenes(
	[
		new Scene("Carrot Tosser", "Tompa Tjompa", "carrotToss.css"),
		new Scene("RPG Adventure", "John Doe", "adventure.css"),
		new Scene("Frogger the Froggy", "Leap Frog", "froggyJump.css"),
		new Scene("Dragon Snack Attack", "Lilly Firebreath", "snackTime.css"),
		new Scene("Pirate Translator", "Captain Speak", "pirateSpeak.css"),
		new Scene("Super Potato Bros", "Spuddy McSpud", "potatoAdventure.css"),
		new Scene("Quantum Pizza Quest", "Dr. Slice", "pizzaTime.css"),
		new Scene("Unicorn in Space", "Uni the Unicorn", "galaxyUnicorn.css"),
		new Scene("Rocket Ride to the Moon", "Astronaut McFly", "rocketFuel.css"),
		new Scene("Ninja Squirrel: Shadow of the Acorn", "Nutty McNinja", "acornStealth.css"),
		new Scene("Time Traveler’s Dilemma", "Timeless Ted", "timeWarp.css"),
		new Scene("Haunted Hot Dog Stand", "Frankie Hotdog", "ghostlyGrill.css"),
		new Scene("Jellybean Jungle", "Candy Cane", "jellybean.css"),
		new Scene("Space Potato: Galactic Fry", "Spudnik", "spaceFry.css"),
		new Scene("The Adventures of Captain Noodle", "Pasta Pete", "noodleQuest.css"),
		new Scene("The Adventures of Captain Noodle", "Pasta Pete", "noodleQuest.css"),
		new Scene("The Adventures of Captain Noodle", "Pasta Pete", "noodleQuest.css"),
		new Scene("The Adventures of Captain Noodle", "Pasta Pete", "noodleQuest.css")
	]
);