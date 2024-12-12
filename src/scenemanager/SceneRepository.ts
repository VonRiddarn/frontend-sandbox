import LandingPage from "../scenes/landing-page/landing-page";
import { Scene } from "./Scene";

const sceneRepository: Scene[] = [
	new LandingPage("Landing Page", "Timmy Ö", "landing-page"),
] as const;

export default sceneRepository;