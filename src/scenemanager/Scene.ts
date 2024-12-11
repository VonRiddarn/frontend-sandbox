type SceneInfo = {
	name: string;
	author: string;
	cssPath: string;
};

class Scene {

	protected _name: string;
	protected _author: string;
	protected _cssPath: string;

	constructor(name: string, author: string, cssPath: string) {
		this._name = name;
		this._author = author;
		this._cssPath = cssPath;
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
