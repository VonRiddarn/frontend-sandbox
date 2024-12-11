import { Scene } from "./Scene";
import sceneRenderer from "./SceneRenderer";

let isLoading = false;

class SceneManager {

	private _scenes: Scene[] = []; 
	private _currentScene: Scene | null = null;
	private _cssElement: HTMLLinkElement = document.getElementById("dynamic-css") as HTMLLinkElement;
	private _main: HTMLElement = document.querySelector("main") as HTMLElement;

	constructor() {
	};

	getScene(name: string): Scene | null {
		return this._scenes.find((scene) => scene.toInfo().name.toLowerCase() === name.toLowerCase()) || null;
	}

	changeScene = (newScene: Scene) => {

		if(newScene === this._currentScene)
			return;
		
		if(isLoading)
		{
			console.log("Action stopped, page is still loading!");
			return;
		}
		isLoading = true;

		if(this._currentScene != null)
		{
			this._currentScene.exit();
			this._currentScene.toInfo().buttonElement.id = "";
		}

		this._currentScene = newScene;

		this._main.innerHTML = "";

		enterScene(this._currentScene);

		this._currentScene.toInfo().buttonElement.id = "selected-button";
		this._cssElement.href = this._currentScene.toInfo().cssPath;
	};

	initializeScenes = (scenes: Scene[]) => {
		this._scenes = scenes;

		scenes.forEach((scene) => {
			const btn = sceneRenderer.createButton(scene.toInfo());
			scene.initialize(btn);

			btn.addEventListener('click', () => {
				this.changeScene(scene);
			});
		});

		if(this._scenes.length > 0)
			this.changeScene(this._scenes[0]);
	};
};

// TODO: Make sure that the site cannot change before all async has been done - fr fr
async function enterScene(currentScene: Scene) {
    const resp = await fetch(currentScene.toInfo().htmlPath);
    const html = await resp.text();
	isLoading = await false;
    const main = document.querySelector("main") as HTMLElement; 
	main.innerHTML = await html;
	await currentScene.enter();
}

export default SceneManager;