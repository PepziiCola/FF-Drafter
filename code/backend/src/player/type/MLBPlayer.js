const Player = require('../Player');
const {MLBTeams, MLBPositions} = require("../enums");

class MLBPlayer extends Player {
    constructor(playerId, league, playerDetails, team, position) {
        super(playerId, league, playerDetails);

        if (!Object.values(MLBTeams).includes(team)) {
            throw new Error(`Invalid team: ${team}. It must be an NFL Team`);
        }

        if (!Object.values(MLBPositions).includes(position)) {
            throw new Error(`Invalid position: ${position}. It must be an NFL Position`);
        }

        this.team = team;
        this.position = position;
    }
}

module.exports = MLBPlayer;