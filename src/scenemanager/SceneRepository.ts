import LandingPage from "../scenes/landing-page/landing-page";
import PirateTranspiler from "../scenes/pirate-transpiler/pirate-transpiler";
import { Scene } from "./Scene";

const sceneRepository: Scene[] = [
	new LandingPage("Landing Page", "Timmy Ö", "landing-page"),
	new PirateTranspiler("Pirate transpiler", "John Doe", "pirate-transpiler"),
	// More goes here
] as const;

export default sceneRepository;