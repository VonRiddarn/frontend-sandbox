import Scene from "../../scenemanager/Scene";

const main = document.querySelector("main") as HTMLElement;

let isActive: boolean = true;
let turn: "O" | "X" = "X";
let board: HTMLElement;
let tiles: HTMLElement[] = [];

const landingPageScene: Scene = {
	name: "Landing Page",
	author: "Timmy Öhman",
	cssPath: "/src/scenes/landing-page/landing-page.css",
	htmlPath: "/src/scenes/landing-page/landing-page.html",

	enter: function (): void
	{
		
		board = document.getElementById("ttt-board") as HTMLElement;
		tiles = Array.from(board.children || []) as HTMLElement[];
		initializeBoard();
		resetBoard();
		let reset = main.appendChild(document.createElement("button"));
		reset.innerHTML = "RESET";
		reset.addEventListener('click', () => {
			resetBoard();
		});
	},
}

const initializeBoard = () => {
	board.classList.add("active-board");

	tiles.forEach((bel) => {
		bel.addEventListener('click', onClick);
		bel.addEventListener('mouseover', onMouseOver);
		bel.addEventListener('mouseleave', onMouseLeave);
	});
};

function resetBoard() {
	tiles.forEach(tile => {
		tile.innerHTML = "";
		tile.classList.remove("win-tile", "mark-x", "mark-o");
	});

	isActive = true;
	board.classList.add("active-board");
}

function tryWinConditions()  {

	let winnerTiles: HTMLElement[] = [];

	const winConditions = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];

	winConditions.forEach((conditions) => {
		let [x, y, z] = conditions;
		
		if(!tiles[x].innerHTML)
			return; // Exits the current itteration of a NESTED loop (same as: continue)

		if(tiles[x].innerHTML === tiles[y].innerHTML && tiles[y].innerHTML === tiles[z].innerHTML)
			winnerTiles = [tiles[x], tiles[y], tiles[z]];
	});

	if(winnerTiles.length <= 0)
		return;

	winnerTiles.forEach((wt) => wt.classList.add("win-tile"));
	board.classList.remove("active-board");
	isActive = false;
}

function onClick(e: MouseEvent) {
	const el = e.target as HTMLElement;

	if(!isActive || el.innerHTML)
		return;

	el.innerHTML = turn;
	turn = turn === "X" ? "O" : "X";
	tryWinConditions();
}

function onMouseOver(e: MouseEvent) {
	if(isActive)
		setMark(e.target as HTMLElement, 1);
}

function onMouseLeave(e: MouseEvent) {
	if(isActive)
		setMark(e.target as HTMLElement, 0);
}

const setMark = (el: HTMLElement, state: 1 | 0) => state === 1 ? el.classList.add(`mark-${turn.toLowerCase()}`) : el.classList.remove(`mark-${turn.toLowerCase()}`);

export default landingPageScene;