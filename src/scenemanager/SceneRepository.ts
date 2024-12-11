import LandingPage from "../scenes/landing-page/LandingPage";
import PirateTranspiler from "../scenes/PirateTranspiler/PirateTranspiler";
import { Scene } from "./Scene";

const sceneRepository: Scene[] = [
	new LandingPage("Landing Page", "Timmy Ö", "/src/scenes/landing-page/LandingPage.css"),
	new PirateTranspiler("Pirate transpiler", "John Doe", "/src/scenes/PirateTranspiler/PirateTranspiler.css"),
	// More goes here
] as const;

export default sceneRepository;