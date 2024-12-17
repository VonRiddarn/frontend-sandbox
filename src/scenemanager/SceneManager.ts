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

		if(scenes.length > 0)
			this.changeScene(scenes[0]);
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

		// TODO: 
		// Separate the UI calls like main.innerhtml into the sceneRenderer instead
		// Then we could do something like "sceneRenderer.RenderScene(Scene, Callback)"
		// This way, the scenerenderer will render the scene, and when it's done, it'll call something like the enter method from here.
		// More thought is required!

		this.currentScene = newScene;
		main.innerHTML = `Loading scene ${newScene.name} by ${newScene.author}`;

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