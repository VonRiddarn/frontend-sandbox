type Scene = {
	name: string,
	author: string,
	cssPath: string,
	htmlPath: string,
	buttonElement?: HTMLElement,

	enter: () => void,
	exit?: () => void,
};

export default Scene;