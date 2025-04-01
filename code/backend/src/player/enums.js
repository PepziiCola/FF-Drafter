const League = Object.freeze({
    NFL: "NFL",
    MLB: "MLB",
    NBA: "NBA",
    NHL: "NHL"
});

const NFLPositions = Object.freeze({
    QB: "Quarterback",
    RB: "Running Back",
    WR: "Wide Receiver",
    TE: "Tight End",
    K: "Kicker",
    DEF: "Defense"
});

const MLBPositions = Object.freeze({
    P: "Pitcher",
    C: "Catcher",
    FB: "First Base",
    SB: "Second Base",
    TB: "Third Base",
    SS: "Shortstop",
    LF: "Left Field",
    CF: "Center Field",
    RF: "Right Field",
    DH: "Designated Hitter"
});

const NBAPositions = Object.freeze({
    PG: "Point Guard",
    SG: "Shooting Guard",
    SF: "Small Forward",
    PF: "Power Forward",
    C: "Center"
});

const NHLPositions = Object.freeze({
    C: "Center",
    LW: "Left Wing",
    RW: "Right Wing",
    D: "Defenseman",
    G: "Goaltender"
});


/**
 * NFL Teams
 * @type {Enum Name: {name: string, abbreviation: string, league: string, division: string}
 */
const NFLTeams = {
    ARI: {
        name: "Arizona Cardinals",
        abbreviation: "ARI",
        conference: "NFC",
        division: "West"
    },
    ATL: {
        name: "Atlanta Falcons",
        abbreviation: "ATL",
        conference: "NFC",
        division: "South"
    },
    BAL: {
        name: "Baltimore Ravens",
        abbreviation: "BAL",
        conference: "AFC",
        division: "North"
    },
    BUF: {
        name: "Buffalo Bills",
        abbreviation: "BUF",
        conference: "AFC",
        division: "East"
    },
    CAR: {
        name: "Carolina Panthers",
        abbreviation: "CAR",
        conference: "NFC",
        division: "South"
    },
    CHI: {
        name: "Chicago Bears",
        abbreviation: "CHI",
        conference: "NFC",
        division: "North"
    },
    CIN: {
        name: "Cincinnati Bengals",
        abbreviation: "CIN",
        conference: "AFC",
        division: "North"
    },
    CLE: {
        name: "Cleveland Browns",
        abbreviation: "CLE",
        conference: "AFC",
        division: "North"
    },
    DAL: {
        name: "Dallas Cowboys",
        abbreviation: "DAL",
        conference: "NFC",
        division: "East"
    },
    DEN: {
        name: "Denver Broncos",
        abbreviation: "DEN",
        conference: "AFC",
        division: "West"
    },
    DET: {
        name: "Detroit Lions",
        abbreviation: "DET",
        conference: "NFC",
        division: "North"
    },
    GB: {
        name: "Green Bay Packers",
        abbreviation: "GB",
        conference: "NFC",
        division: "North"
    },
    HOU: {
        name: "Houston Texans",
        abbreviation: "HOU",
        conference: "AFC",
        division: "South"
    },
    IND: {
        name: "Indianapolis Colts",
        abbreviation: "IND",
        conference: "AFC",
        division: "South"
    },
    JAX: {
        name: "Jacksonville Jaguars",
        abbreviation: "JAX",
        conference: "AFC",
        division: "South"
    },
    KC: {
        name: "Kansas City Chiefs",
        abbreviation: "KC",
        conference: "AFC",
        division: "West"
    },
    LAC: {
        name: "Los Angeles Chargers",
        abbreviation: "LAC",
        conference: "AFC",
        division: "West"
    },
    LAR: {
        name: "Los Angeles Rams",
        abbreviation: "LAR",
        conference: "NFC",
        division: "West"
    },
    LV: {
        name: "Las Vegas Raiders",
        abbreviation: "LV",
        conference: "AFC",
        division: "West"
    },
    MIA: {
        name: "Miami Dolphins",
        abbreviation: "MIA",
        conference: "AFC",
        division: "East"
    },
    MIN: {
        name: "Minnesota Vikings",
        abbreviation: "MIN",
        conference: "NFC",
        division: "North"
    },
    NE: {
        name: "New England Patriots",
        abbreviation: "NE",
        conference: "AFC",
        division: "East"
    },
    NO: {
        name: "New Orleans Saints",
        abbreviation: "NO",
        conference: "NFC",
        division: "South"
    },
    NYG: {
        name: "New York Giants",
        abbreviation: "NYG",
        conference: "NFC",
        division: "East"
    },
    NYJ: {
        name: "New York Jets",
        abbreviation: "NYJ",
        conference: "AFC",
        division: "East"
    },
    PHI: {
        name: "Philadelphia Eagles",
        abbreviation: "PHI",
        conference: "NFC",
        division: "East"
    },
    PIT: {
        name: "Pittsburgh Steelers",
        abbreviation: "PIT",
        conference: "AFC",
        division: "North"
    },
    SF: {
        name: "San Francisco 49ers",
        abbreviation: "SF",
        conference: "NFC",
        division: "West"
    },
    SEA: {
        name: "Seattle Seahawks",
        abbreviation: "SEA",
        conference: "NFC",
        division: "West"
    },
    TB: {
        name: "Tampa Bay Buccaneers",
        abbreviation: "TB",
        conference: "NFC",
        division: "South"
    },
    TEN: {
        name: "Tennessee Titans",
        abbreviation: "TEN",
        conference: "AFC",
        division: "South"
    },
    WAS: {
        name: "Washington Commanders",
        abbreviation: "WAS",
        conference: "NFC",
        division: "East"
    }
};


/**
 * MLB Teams
 * @type {Enum Name: {name: string, abbreviation: string, league: string, division: string}
 */
const MLBTeams = {
    ARI: {
        name: "Arizona Diamondbacks",
        abbreviation: "ARI",
        league: "NL",
        division: "West"
    },
    ATL: {
        name: "Atlanta Braves",
        abbreviation: "ATL",
        league: "NL",
        division: "East"
    },
    BAL: {
        name: "Baltimore Orioles",
        abbreviation: "BAL",
        league: "AL",
        division: "East"
    },
    BOS: {
        name: "Boston Red Sox",
        abbreviation: "BOS",
        league: "AL",
        division: "East"
    },
    CHC: {
        name: "Chicago Cubs",
        abbreviation: "CHC",
        league: "NL",
        division: "Central"
    },
    CHW: {
        name: "Chicago White Sox",
        abbreviation: "CHW",
        league: "AL",
        division: "Central"
    },
    CIN: {
        name: "Cincinnati Reds",
        abbreviation: "CIN",
        league: "NL",
        division: "Central"
    },
    CLE: {
        name: "Cleveland Guardians",
        abbreviation: "CLE",
        league: "AL",
        division: "Central"
    },
    COL: {
        name: "Colorado Rockies",
        abbreviation: "COL",
        league: "NL",
        division: "West"
    },
    DET: {
        name: "Detroit Tigers",
        abbreviation: "DET",
        league: "AL",
        division: "Central"
    },
    HOU: {
        name: "Houston Astros",
        abbreviation: "HOU",
        league: "AL",
        division: "West"
    },
    KC: {
        name: "Kansas City Royals",
        abbreviation: "KC",
        league: "AL",
        division: "Central"
    },
    LAA: {
        name: "Los Angeles Angels",
        abbreviation: "LAA",
        league: "AL",
        division: "West"
    },
    LAD: {
        name: "Los Angeles Dodgers",
        abbreviation: "LAD",
        league: "NL",
        division: "West"
    },
    MIA: {
        name: "Miami Marlins",
        abbreviation: "MIA",
        league: "NL",
        division: "East"
    },
    MIL: {
        name: "Milwaukee Brewers",
        abbreviation: "MIL",
        league: "NL",
        division: "Central"
    },
    MIN: {
        name: "Minnesota Twins",
        abbreviation: "MIN",
        league: "AL",
        division: "Central"
    },
    NYM: {
        name: "New York Mets",
        abbreviation: "NYM",
        league: "NL",
        division: "East"
    },
    NYY: {
        name: "New York Yankees",
        abbreviation: "NYY",
        league: "AL",
        division: "East"
    },
    OAK: {
        name: "Oakland Athletics",
        abbreviation: "OAK",
        league: "AL",
        division: "West"
    },
    PHI: {
        name: "Philadelphia Phillies",
        abbreviation: "PHI",
        league: "NL",
        division: "East"
    },
    PIT: {
        name: "Pittsburgh Pirates",
        abbreviation: "PIT",
        league: "NL",
        division: "Central"
    },
    SD: {
        name: "San Diego Padres",
        abbreviation: "SD",
        league: "NL",
        division: "West"
    },
    SEA: {
        name: "Seattle Mariners",
        abbreviation: "SEA",
        league: "AL",
        division: "West"
    },
    SF: {
        name: "San Francisco Giants",
        abbreviation: "SF",
        league: "NL",
        division: "West"
    },
    STL: {
        name: "St. Louis Cardinals",
        abbreviation: "STL",
        league: "NL",
        division: "Central"
    },
    TB: {
        name: "Tampa Bay Rays",
        abbreviation: "TB",
        league: "AL",
        division: "East"
    },
    TEX: {
        name: "Texas Rangers",
        abbreviation: "TEX",
        league: "AL",
        division: "West"
    },
    TOR: {
        name: "Toronto Blue Jays",
        abbreviation: "TOR",
        league: "AL",
        division: "East"
    },
    WAS: {
        name: "Washington Nationals",
        abbreviation: "WAS",
        league: "NL",
        division: "East"
    }
};


/**
 * NBA Teams
 * @type {Enum Name: {name: string, abbreviation: string, league: string, division: string}
 */
const NBATeams = {
    ATL: {
        name: "Atlanta Hawks",
        abbreviation: "ATL",
        conference: "Eastern",
        division: "Southeast"
    },
    BOS: {
        name: "Boston Celtics",
        abbreviation: "BOS",
        conference: "Eastern",
        division: "Atlantic"
    },
    BKN: {
        name: "Brooklyn Nets",
        abbreviation: "BKN",
        conference: "Eastern",
        division: "Atlantic"
    },
    CHA: {
        name: "Charlotte Hornets",
        abbreviation: "CHA",
        conference: "Eastern",
        division: "Southeast"
    },
    CHI: {
        name: "Chicago Bulls",
        abbreviation: "CHI",
        conference: "Eastern",
        division: "Central"
    },
    CLE: {
        name: "Cleveland Cavaliers",
        abbreviation: "CLE",
        conference: "Eastern",
        division: "Central"
    },
    DAL: {
        name: "Dallas Mavericks",
        abbreviation: "DAL",
        conference: "Western",
        division: "Southwest"
    },
    DEN: {
        name: "Denver Nuggets",
        abbreviation: "DEN",
        conference: "Western",
        division: "Northwest"
    },
    DET: {
        name: "Detroit Pistons",
        abbreviation: "DET",
        conference: "Eastern",
        division: "Central"
    },
    GSW: {
        name: "Golden State Warriors",
        abbreviation: "GSW",
        conference: "Western",
        division: "Pacific"
    },
    HOU: {
        name: "Houston Rockets",
        abbreviation: "HOU",
        conference: "Western",
        division: "Southwest"
    },
    IND: {
        name: "Indiana Pacers",
        abbreviation: "IND",
        conference: "Eastern",
        division: "Central"
    },
    LAC: {
        name: "Los Angeles Clippers",
        abbreviation: "LAC",
        conference: "Western",
        division: "Pacific"
    },
    LAL: {
        name: "Los Angeles Lakers",
        abbreviation: "LAL",
        conference: "Western",
        division: "Pacific"
    },
    MEM: {
        name: "Memphis Grizzlies",
        abbreviation: "MEM",
        conference: "Western",
        division: "Southwest"
    },
    MIA: {
        name: "Miami Heat",
        abbreviation: "MIA",
        conference: "Eastern",
        division: "Southeast"
    },
    MIL: {
        name: "Milwaukee Bucks",
        abbreviation: "MIL",
        conference: "Eastern",
        division: "Central"
    },
    MIN: {
        name: "Minnesota Timberwolves",
        abbreviation: "MIN",
        conference: "Western",
        division: "Northwest"
    },
    NOP: {
        name: "New Orleans Pelicans",
        abbreviation: "NOP",
        conference: "Western",
        division: "Southwest"
    },
    NYK: {
        name: "New York Knicks",
        abbreviation: "NYK",
        conference: "Eastern",
        division: "Atlantic"
    },
    OKC: {
        name: "Oklahoma City Thunder",
        abbreviation: "OKC",
        conference: "Western",
        division: "Northwest"
    },
    ORL: {
        name: "Orlando Magic",
        abbreviation: "ORL",
        conference: "Eastern",
        division: "Southeast"
    },
    PHI: {
        name: "Philadelphia 76ers",
        abbreviation: "PHI",
        conference: "Eastern",
        division: "Atlantic"
    },
    PHX: {
        name: "Phoenix Suns",
        abbreviation: "PHX",
        conference: "Western",
        division: "Pacific"
    },
    POR: {
        name: "Portland Trail Blazers",
        abbreviation: "POR",
        conference: "Western",
        division: "Northwest"
    },
    SAC: {
        name: "Sacramento Kings",
        abbreviation: "SAC",
        conference: "Western",
        division: "Pacific"
    },
    SAS: {
        name: "San Antonio Spurs",
        abbreviation: "SAS",
        conference: "Western",
        division: "Southwest"
    },
    TOR: {
        name: "Toronto Raptors",
        abbreviation: "TOR",
        conference: "Eastern",
        division: "Atlantic"
    },
    UTA: {
        name: "Utah Jazz",
        abbreviation: "UTA",
        conference: "Western",
        division: "Northwest"
    },
    WAS: {
        name: "Washington Wizards",
        abbreviation: "WAS",
        conference: "Eastern",
        division: "Southeast"
    }
};


/**
 * NHL Teams
 * @type {Enum Name: {name: string, abbreviation: string, league: string, division: string}
 */
const NHLTeams = {
    ANA: {
        name: "Anaheim Ducks",
        abbreviation: "ANA",
        conference: "Western",
        division: "Pacific"
    },
    ARI: {
        name: "Arizona Coyotes",
        abbreviation: "ARI",
        conference: "Western",
        division: "Central"
    },
    BOS: {
        name: "Boston Bruins",
        abbreviation: "BOS",
        conference: "Eastern",
        division: "Atlantic"
    },
    BUF: {
        name: "Buffalo Sabres",
        abbreviation: "BUF",
        conference: "Eastern",
        division: "Atlantic"
    },
    CGY: {
        name: "Calgary Flames",
        abbreviation: "CGY",
        conference: "Western",
        division: "Pacific"
    },
    CAR: {
        name: "Carolina Hurricanes",
        abbreviation: "CAR",
        conference: "Eastern",
        division: "Metropolitan"
    },
    CHI: {
        name: "Chicago Blackhawks",
        abbreviation: "CHI",
        conference: "Western",
        division: "Central"
    },
    COL: {
        name: "Colorado Avalanche",
        abbreviation: "COL",
        conference: "Western",
        division: "Central"
    },
    CBJ: {
        name: "Columbus Blue Jackets",
        abbreviation: "CBJ",
        conference: "Eastern",
        division: "Metropolitan"
    },
    DAL: {
        name: "Dallas Stars",
        abbreviation: "DAL",
        conference: "Western",
        division: "Central"
    },
    DET: {
        name: "Detroit Red Wings",
        abbreviation: "DET",
        conference: "Eastern",
        division: "Atlantic"
    },
    EDM: {
        name: "Edmonton Oilers",
        abbreviation: "EDM",
        conference: "Western",
        division: "Pacific"
    },
    FLA: {
        name: "Florida Panthers",
        abbreviation: "FLA",
        conference: "Eastern",
        division: "Atlantic"
    },
    LAK: {
        name: "Los Angeles Kings",
        abbreviation: "LAK",
        conference: "Western",
        division: "Pacific"
    },
    MIN: {
        name: "Minnesota Wild",
        abbreviation: "MIN",
        conference: "Western",
        division: "Central"
    },
    MTL: {
        name: "Montreal Canadiens",
        abbreviation: "MTL",
        conference: "Eastern",
        division: "Atlantic"
    },
    NSH: {
        name: "Nashville Predators",
        abbreviation: "NSH",
        conference: "Western",
        division: "Central"
    },
    NJD: {
        name: "New Jersey Devils",
        abbreviation: "NJD",
        conference: "Eastern",
        division: "Metropolitan"
    },
    NYI: {
        name: "New York Islanders",
        abbreviation: "NYI",
        conference: "Eastern",
        division: "Metropolitan"
    },
    NYR: {
        name: "New York Rangers",
        abbreviation: "NYR",
        conference: "Eastern",
        division: "Metropolitan"
    },
    OTT: {
        name: "Ottawa Senators",
        abbreviation: "OTT",
        conference: "Eastern",
        division: "Atlantic"
    },
    PHI: {
        name: "Philadelphia Flyers",
        abbreviation: "PHI",
        conference: "Eastern",
        division: "Metropolitan"
    },
    PIT: {
        name: "Pittsburgh Penguins",
        abbreviation: "PIT",
        conference: "Eastern",
        division: "Metropolitan"
    },
    SJS: {
        name: "San Jose Sharks",
        abbreviation: "SJS",
        conference: "Western",
        division: "Pacific"
    },
    SEA: {
        name: "Seattle Kraken",
        abbreviation: "SEA",
        conference: "Western",
        division: "Pacific"
    },
    STL: {
        name: "St. Louis Blues",
        abbreviation: "STL",
        conference: "Western",
        division: "Central"
    },
    TBL: {
        name: "Tampa Bay Lightning",
        abbreviation: "TBL",
        conference: "Eastern",
        division: "Atlantic"
    },
    TOR: {
        name: "Toronto Maple Leafs",
        abbreviation: "TOR",
        conference: "Eastern",
        division: "Atlantic"
    },
    VAN: {
        name: "Vancouver Canucks",
        abbreviation: "VAN",
        conference: "Western",
        division: "Pacific"
    },
    VGK: {
        name: "Vegas Golden Knights",
        abbreviation: "VGK",
        conference: "Western",
        division: "Pacific"
    },
    WSH: {
        name: "Washington Capitals",
        abbreviation: "WSH",
        conference: "Eastern",
        division: "Metropolitan"
    },
    WPG: {
        name: "Winnipeg Jets",
        abbreviation: "WPG",
        conference: "Western",
        division: "Central"
    }
};

module.exports = {
    League,
    NFLPositions,
    MLBPositions,
    NBAPositions,
    NHLPositions,
    NFLTeams,
    MLBTeams,
    NBATeams,
    NHLTeams,
}