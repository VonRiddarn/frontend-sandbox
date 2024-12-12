import Scene from "./Scene";

const aside = document.querySelector("aside") as HTMLElement;

const sceneRenderer = Object.freeze({

	createButton: (scene: Scene) => {
		let el = aside.appendChild(document.createElement("button"));
		el.innerHTML = `${scene.name}`;
		el.appendChild(document.createElement("p")).innerHTML = scene.author;

		return el;
	},
});

export default sceneRenderer;