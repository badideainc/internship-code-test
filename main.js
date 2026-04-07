const playerMarker = 'X'
const computerMarker = 'O'
let winner = null

let patterns = ["@@@~~~~~~", "~~~@@@~~~", "~~~~~~@@@",
	"@~~@~~@~~", "~@~~@~~@~", "~~@~~@~~@",
	"@~~~@~~~@", "~~@~@~@~~"
]

function checkWinner(marker) {

	const cells = getCells()

	//Check each pattern
	patterns.forEach((pattern) => {
		let match = matchPattern(cells, marker, pattern)

		//If matches exit early as already one
		if (match) {
			winner = marker
			return
		}
	})
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

function setWinner(marker) {
	// disable all the cells to prevent further play
	getCells().forEach((cell) => (cell.disabled = true))

	// reveal the winner
	document.getElementById('status').textContent = `${marker}’s wins!`

	// update the winner variable so that handleCellClick knows not to continue
	winner = marker
}

function simulateComputerTurn() {
	// find the empty cells, pick a random one and then place a marker
	const cells = getCells()
	const emptyCells = cells.filter((cell) => cell.textContent === '')
	const randomEmptyCellIndex = Math.ceil(Math.random() * emptyCells.length - 1)

	const randomEmptyCell = emptyCells[randomEmptyCellIndex]
	randomEmptyCell.textContent = computerMarker
}

function reset() {
	document.getElementById('status').textContent = ''
	getCells().forEach((cell) => {
		cell.textContent = ''
		cell.disabled = false
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
	checkWinner(playerMarker)

	if (!winner) {
		// simulate the computer's next turn and check to see if they’ve won
		simulateComputerTurn()
		checkWinner(computerMarker)
	}
	else {
		setWinner(winner)
	}
}

// add event listeners
getCells().forEach((cell) => cell.addEventListener('click', handleCellClick))
document.getElementById('reset').addEventListener('click', reset)
