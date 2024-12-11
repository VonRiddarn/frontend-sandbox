import { Scene } from "./Scene";
import sceneRenderer from "./SceneRenderer";

class SceneManager {

	private _scenes: Scene[] = []; 
	private _currentScene: Scene | null = null;
	private _cssElement: HTMLLinkElement = document.getElementById("dynamic-css") as HTMLLinkElement;

	constructor() {
	};

	getScene(name: string): Scene | null {
		return this._scenes.find((scene) => scene.toInfo().name.toLowerCase() === name.toLowerCase()) || null;
	}

	changeScene = (newScene: Scene) => {
		this._currentScene?.exit();

		this._currentScene = newScene;

		this._cssElement.href = this._currentScene.toInfo().cssPath;

		this._currentScene.enter();
	};

	initializeScenes = (scenes: Scene[]) => {
		this._scenes = scenes;

		scenes.forEach((scene) => {
			sceneRenderer.createButton(scene.toInfo());
		});

		if(this._scenes.length > 0)
			this.changeScene(this._scenes[0]);
	};
};

export default SceneManager;