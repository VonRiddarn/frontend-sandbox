import { Scene } from "../../scenemanager/Scene";

class LandingPage extends Scene {

	override enter = () => {
		if(this._main == null)
			return;

		this._main.innerHTML = "Welcome, choose a scene!";
	};

};

export default LandingPage;