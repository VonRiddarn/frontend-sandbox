import { SceneInfo } from "./Scene";

const asideEl = document.querySelector("aside") as HTMLElement;

const sceneRenderer = Object.freeze({

	createButton: (sceneInfo: SceneInfo) => {
		let el = asideEl.appendChild(document.createElement("button"));
		el.innerHTML = `${sceneInfo.name}`;
		el.appendChild(document.createElement("p")).innerHTML = sceneInfo.author;
	},
});

export default sceneRenderer;