type SceneInfo = {
	name: string;
	author: string;
	cssPath: string;
	htmlPath: string;
	buttonElement: HTMLElement;
};

// TODO: If we get too many scenes to keep track of, maybe add filters to them like:
// School, Game, Transpiler, Other

class Scene {

	protected _name: string;
	protected _author: string;
	protected _cssPath: string;
	protected _htmlPath: string;
	protected _main: HTMLElement | null = null;
	protected _buttonElement: HTMLElement = document.createElement("undefined-element");

	constructor(name: string, author: string, cssPath: string, htmlPath: string) {
		this._name = name;
		this._author = author;
		this._cssPath = cssPath;
		this._htmlPath = htmlPath;
		this._main = document.querySelector("main");
	};

	initialize = (buttonElement: HTMLElement) => {
		this._buttonElement = buttonElement;
	}

	enter = () => {

	};

	exit = () => {

	}

	toInfo = ():SceneInfo => ({
			name: this._name,
			author: this._author,
			cssPath: this._cssPath,
			htmlPath: this._htmlPath,
			buttonElement: this._buttonElement
	});
};

export { Scene };
export type { SceneInfo };
