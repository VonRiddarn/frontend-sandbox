import Scene from "../../scenemanager/Scene";

const main = document.querySelector("main") as HTMLElement;

const landingPageScene: Scene = {
	name: "Landing Page",
	author: "Timmy Öhman",
	cssPath: "/src/scenes/landing-page/landing-page.css",
	htmlPath: "/src/scenes/landing-page/landing-page.html",

	enter: function (): void
	{
		main.appendChild(document.createElement("button")).innerHTML = "A BUTTON!!";
	},
}

export default landingPageScene;