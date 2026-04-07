let playerMarker = 'X'
let computerMarker = 'O'
let winner = null

let patterns = ["@@@~~~~~~", "~~~@@@~~~", "~~~~~~@@@",
	"@~~@~~@~~", "~@~~@~~@~", "~~@~~@~~@",
	"@~~~@~~~@", "~~@~@~@~~"
]

let playerScore = 0
let computerScore = 0

function checkWinner(marker) {

	const cells = getCells()

	let winPattern = null

	//Check each pattern
	patterns.forEach((pattern) => {
		let match = matchPattern(cells, marker, pattern)

		//If matches exit early as already one
		if (match) {
			winner = marker
			winPattern = pattern
			return
		}
	})

	return winPattern
}

//Use a string pattern to match an acceptable grid position
function matchPattern(cells, marker, pattern) {

	let score = 0

	for (let i = 0; i < cells.length; i++) {

		//If non empty and match pattern, increment score
		if (cells[i].textContent == marker && pattern[i] == "@") {
			score++
		}
	}

	//Make array
	let patternArray = pattern.split("")

	//Filter for only "@"
	let patternAccepts = patternArray.filter((patternChar) => patternChar == "@")

	//If a winning pattern, should have the same number of @ as the pattern
	return score == patternAccepts.length
}

/*

@@@______
___@@@___
______@@@

xxx
___
___

x__
_x_
__x

x__
x__
x__

*/

function getCells() {
	return Array.from(document.querySelectorAll('.cell'))
}

function setWinner(marker, winPattern) {

	let cells = getCells()	

	//Show winning pattern
	for (let i = 0; i < cells.length; i++) {
		if (winPattern[i] == "@") {
			cells[i].classList.add("winButton")
		}
	}

// disable all the cells to prevent further play
	cells.forEach((cell) => {cell.disabled = true})

	// reveal the winner
	updateState(`${marker}’s wins!`)

	// update the winner variable so that handleCellClick knows not to continue
	winner = marker

	addScore(marker)
}

function setDraw() {
	getCells().forEach((cell) => (cell.disabled = true))

	updateState(`Draw!`)
}

function addScore(marker) {
	if (marker === playerMarker) {
		playerScore++		
	} 
	else {
		computerScore++		
	}

	updateScoreUI()
}

function updateScoreUI() {
	document.getElementById('playerScore').textContent = `Player (${playerMarker}): ${playerScore}`
	document.getElementById('computerScore').textContent = `Robit (${computerMarker}): ${computerScore}`
}

function updateState(message) {
	document.getElementById('status').textContent = message
}

function simulateComputerTurn() {
	// find the empty cells, pick a random one and then place a marker
	const cells = getCells()
	const emptyCells = cells.filter((cell) => cell.textContent === '')

	//No cells left to play but hasn't won, so draw
	if (emptyCells.length === 0) {
		setDraw()
		return
	}

	const randomEmptyCellIndex = Math.ceil(Math.random() * emptyCells.length - 1)
	const randomEmptyCell = emptyCells[randomEmptyCellIndex]
	randomEmptyCell.textContent = computerMarker
}

function flipMarkers() {
	let temp = playerMarker

	playerMarker = computerMarker
	computerMarker = temp

	document.getElementById('playerMarker').textContent = playerMarker

	updateScoreUI()
}

function reset() {
	document.getElementById('status').textContent = ''
	getCells().forEach((cell) => {
		cell.textContent = ''
		cell.disabled = false
 
		cell.classList.remove("winButton")
	})

	winner = null
}

function handleCellClick(e) {
	// what cell did the player click?
	const targetCell = e.target
	// check if the cell has already been filled, do nothing if it has
	const cellMarker = targetCell.textContent
	if (cellMarker !== "") {
		// do nothing, the player needs to click an empty cell
		return
	}

	// the cell was not filled: fill the cell with the player's marker and check
	// to see if they have won the game
	targetCell.textContent = playerMarker
	let pattern = checkWinner(playerMarker)

	if (!winner) {
		// simulate the computer's next turn and check to see if they’ve won
		simulateComputerTurn()
		pattern = checkWinner(computerMarker)
	}
	
	if (winner) {
		setWinner(winner, pattern)
	}
}

// add event listeners
getCells().forEach((cell) => cell.addEventListener('click', handleCellClick))
document.getElementById('reset').addEventListener('click', reset)
document.getElementById('playerMarker').addEventListener('click', flipMarkers)

updateScoreUI()