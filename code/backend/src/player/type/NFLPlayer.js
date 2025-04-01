const Player = require('../Player');
const {NFLTeams, NFLPositions} = require("../enums");

class NFLPlayer extends Player {
    constructor(playerId, league, playerDetails, team, position) {
        super(playerId, league, playerDetails);

        if (!Object.values(NFLTeams).includes(team)) {
            throw new Error(`Invalid team: ${team}. It must be an NFL Team`);
        }

        if (!Object.values(NFLPositions).includes(position)) {
            throw new Error(`Invalid position: ${position}. It must be an NFL Position`);
        }

        this.team = team;
        this.position = position;
    }
}

module.exports = NFLPlayer;