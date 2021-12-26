const warriorsGames = [
	{
		awayTeam: {
			team: "Golden State",
			points: 119,
			isWinner: true,
		},
		homeTeam: {
			team: "Houston",
			points: 106,
			isWinner: false,
		},
	},
	{
		awayTeam: {
			team: "Golden State",
			points: 105,
			isWinner: false,
		},
		homeTeam: {
			team: "Houston",
			points: 127,
			isWinner: true,
		},
	},
	{
		homeTeam: {
			team: "Golden State",
			points: 126,
			isWinner: true,
		},
		awayTeam: {
			team: "Houston",
			points: 85,
			isWinner: false,
		},
	},
	{
		homeTeam: {
			team: "Golden State",
			points: 92,
			isWinner: false,
		},
		awayTeam: {
			team: "Houston",
			points: 95,
			isWinner: true,
		},
	},
	{
		awayTeam: {
			team: "Golden State",
			points: 94,
			isWinner: false,
		},
		homeTeam: {
			team: "Houston",
			points: 98,
			isWinner: true,
		},
	},
	{
		homeTeam: {
			team: "Golden State",
			points: 115,
			isWinner: true,
		},
		awayTeam: {
			team: "Houston",
			points: 86,
			isWinner: false,
		},
	},
	{
		awayTeam: {
			team: "Golden State",
			points: 101,
			isWinner: true,
		},
		homeTeam: {
			team: "Houston",
			points: 92,
			isWinner: false,
		},
	},
];

const makeChart = (games) => {
	//create an ul to add lis to
	const ulParent = document.createElement("ul");

	//loop over each of games
	for (let game of games) {
		//make a variables from homeTeam and awayTeam of game object
		const { homeTeam, awayTeam } = game;

		//create an li
		const gameLi = document.createElement("li");

		//make a var from team and point of away/homeTeam objects
		const { team: aTeam, points: aPoints } = awayTeam;
		const { team: hTeam, points: hPoints } = homeTeam;

		//teamNames
		const teamNames = aTeam + " @ " + hTeam;

		//score
		let scoreLine;
		if (aPoints < hPoints) {
			scoreLine = `${aPoints} - <b>${hPoints}</b>`;
		} else {
			scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
		}

		//is warriors[a home or away team] is winner?
		const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;

		//win or loss background?
		gameLi.classList.add(warriors.isWinner ? "win" : "loss");

		//insert text to li
		gameLi.innerHTML = `${teamNames}  ${scoreLine}`;

		//append created li to parent ul
		ulParent.append(gameLi);
	}
	return ulParent;
};

const chart1 = makeChart(warriorsGames);
//append ul to body
document.body.prepend(chart1);
