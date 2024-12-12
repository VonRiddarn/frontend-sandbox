import { Scene } from "../../scenemanager/Scene";

let board:HTMLElement[] = [];
let turn: "X" |  "O" = "X";

const winSets = 
[
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6],
]

class LandingPage extends Scene {

	override enter = () => {
		if(this._main == null)
			return;

		board = Array.from((document.getElementById("ttt-board") as HTMLElement).childNodes) as HTMLElement[];

		board.forEach((e) => {
			let el = e as HTMLElement;

			el.addEventListener('click', () => {
				OnPressed(el);
				let winGrid = playerHasWon();

				if(winGrid.length <= 0)
					return;

				console.log(`${turn} has won!!`);
			});
		});
	};
};

function OnPressed(el: HTMLElement) {
	if(el.innerHTML != "")
		return;

	el.innerHTML = turn;
	el.className += " pressed";

	turn = turn === "X" ? "O" : "X";
};

function playerHasWon(): HTMLElement[]
{
	for (const ws of winSets) {
		let [a, b, c] = ws;
		
		// Check if A != null
		// Check if B == A
		// Check if C == A
		// If B and C == A that means we have a winning combination.
		if(board[a] && board[a].innerHTML === board[b].innerHTML && board[a].innerHTML === board[c].innerHTML)
		{
			return [board[a],board[b],board[c]];
		}
	}
	
	return []
}

export default LandingPage;