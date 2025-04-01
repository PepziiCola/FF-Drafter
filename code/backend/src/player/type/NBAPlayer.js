const Player = require('../Player');
const {NBATeams, NBAPositions} = require("../enums");

class NBAPlayer extends Player {
    constructor(playerId, league, playerDetails, team, position) {
        super(playerId, league, playerDetails);

        if (!Object.values(NBATeams).includes(team)) {
            throw new Error(`Invalid team: ${team}. It must be an NBA Team`);
        }

        if (!Object.values(NBAPositions).includes(position)) {
            throw new Error(`Invalid position: ${position}. It must be an NBA Position`);
        }

        this.team = team;
        this.position = position;
    }
}

module.exports = NBAPlayer;