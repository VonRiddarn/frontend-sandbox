import landingPageScene from "../scenes/landing-page/landing-page";
import Scene from "./Scene";

const sceneRepository: Scene[] = [
	landingPageScene
] as const;

export default sceneRepository;