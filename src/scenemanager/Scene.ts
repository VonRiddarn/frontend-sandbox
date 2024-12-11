type SceneInfo = {
	name: string;
	author: string;
	cssPath: string;
};

// TODO: If we get too many scenes to keep track of, maybe add filters to them like:
// School, Game, Transpiler, Other

class Scene {

	protected _name: string;
	protected _author: string;
	protected _cssPath: string;
	protected _main: HTMLElement | null = null;

	constructor(name: string, author: string, cssPath: string) {
		this._name = name;
		this._author = author;
		this._cssPath = cssPath;
		this._main = document.querySelector("main");
	};

	enter = () => {

	};

	exit = () => {

	}

	toInfo = ():SceneInfo => ({
			name: this._name,
			author: this._author,
			cssPath: this._cssPath,
	});
};

export { Scene };
export type { SceneInfo };
