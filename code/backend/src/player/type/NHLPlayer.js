const Player = require('../Player');
const {NHLTeams, NHLPositions} = require("../enums");

class NHLPlayer extends Player {
    constructor(playerId, league, playerDetails, team, position) {
        super(playerId, league, playerDetails);

        if (!Object.values(NHLTeams).includes(team)) {
            throw new Error(`Invalid team: ${team}. It must be an NFL Team`);
        }

        if (!Object.values(NHLPositions).includes(position)) {
            throw new Error(`Invalid position: ${position}. It must be an NFL Position`);
        }

        this.team = team;
        this.position = position;
    }
}

module.exports = NHLPlayer;