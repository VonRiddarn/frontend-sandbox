import Scene from "./Scene";
import sceneRenderer from "./SceneRenderer";

// HTML bindings
const main = document.querySelector("main") as HTMLElement;
const css = document.getElementById("dynamic-css") as HTMLLinkElement;

// Local scope top layer
let isLoading = false;

type SceneManager = {
	scenes: Scene[],
	currentScene: Scene | null,

	initializeScenes: (scenes:Scene[]) => void,
	getScene: (name:string) => Scene | null,
	changeScene: (newScene: Scene) => boolean,
}

const sceneManager:SceneManager = {

	scenes: [] as Scene[],
	currentScene: null,

	initializeScenes(scenes: Scene[]): void {

		scenes.forEach((scene) => {
			const btn = sceneRenderer.createButton(scene);
			scene.buttonElement = btn;

			btn.addEventListener('click', () => {
				this.changeScene(scene);
			});
		});

		this.scenes = scenes;
	},

	getScene(name:string): Scene | null {
		return this.scenes.find((s) => s.name.toLowerCase() === name.toLowerCase()) || null;
	},

	changeScene(newScene: Scene): boolean {

		const oldScene = this.currentScene as Scene;

		if(isLoading)
		{
			console.log("Action denied, page is loading!");
			return false;
		}

		isLoading = true;
		if(this.currentScene != null)
		{
			oldScene.exit?.();
			if(oldScene.buttonElement)
				oldScene.buttonElement.id = "";
		}

		this.currentScene = newScene;
		main.innerHTML = "";

		enterScene(newScene);
		if(newScene.buttonElement == null)
			console.log(`Error: Button element missing from ${newScene}`);
		else
			newScene.buttonElement.id = "selected-button";

		css.href = newScene.cssPath;
		return true;
	},

};

async function enterScene(newScene: Scene) {
    const resp = await fetch(newScene.htmlPath);
    const html = await resp.text();

	isLoading = false;
	main.innerHTML = html;
	newScene.enter();
}

export default sceneManager;