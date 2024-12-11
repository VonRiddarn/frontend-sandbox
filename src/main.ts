import SceneManager from "./scenemanager/SceneManager";
import sceneRepository from "./scenemanager/SceneRepository";


console.log("Hello world!");

const scenemanager = new SceneManager();

scenemanager.initializeScenes(sceneRepository);