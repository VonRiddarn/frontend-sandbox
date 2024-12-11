import { Scene } from "./Scene";
import sceneRenderer from "./SceneRenderer";

class SceneManager {


	private _scenes: Scene[] = []; 
	private _currentScene: Scene | null = null;

	constructor() {
	};

	initializeScenes = (scenes: Scene[]) => {
		this._scenes = scenes;

		scenes.forEach((scene) => {
			sceneRenderer.createButton(scene.toInfo());
		});
	};
};

export default SceneManager;