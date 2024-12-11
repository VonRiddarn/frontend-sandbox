import LandingPage from "../scenes/landing-page/LandingPage";
import PirateTranspiler from "../scenes/PirateTranspiler/PirateTranspiler";
import { Scene } from "./Scene";

const sceneRepository: Scene[] = [
	new LandingPage("Landing Page", "Timmy Ö", "landing-page/LandingPage.css", "landing-page/LandingPage.html"),
	new PirateTranspiler("Pirate transpiler", "John Doe", "PirateTranspiler/PirateTranspiler.css", "PirateTranspiler/PirateTranspiler.html"),
	// More goes here
] as const;

export default sceneRepository;