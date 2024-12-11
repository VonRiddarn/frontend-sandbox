import { Scene } from "./Scene";
import sceneRenderer from "./SceneRenderer";

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

		if(this._currentScene != null)
		{
			this._currentScene.exit();
			this._currentScene.toInfo().buttonElement.id = "";
		}

		this._currentScene = newScene;

		this._main.innerHTML = "";
		this._currentScene.toInfo().buttonElement.id = "selected-button";
		
		this._cssElement.href = this._currentScene.toInfo().cssPath;

		this._currentScene.enter();
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

export default SceneManager;