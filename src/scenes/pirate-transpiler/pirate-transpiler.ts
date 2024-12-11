import { Scene } from "../../scenemanager/Scene";

class PirateTranspiler extends Scene {

	override enter = () => {
		if(this._main == null)
			return;

		this._main.appendChild(document.createElement("button")).innerHTML = "Shoot enemy";
	};

};

export default PirateTranspiler;