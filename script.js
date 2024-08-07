const leagues = {
    premierLeague: [
        "ManchesterUnited", "Liverpool", "Chelsea", "Arsenal", "ManchesterCity", 
        "TottenhamHotspur", "LeicesterCity", "WestHamUnited", "Everton", "AstonVilla", 
        "LeedsUnited", "WolverhamptonWanderers", "CrystalPalace", "NewcastleUnited", 
        "BrightonHoveAlbion", "Burnley", "Southampton", "NorwichCity", "Watford", "Brentford"
    ],
    laLiga: [
        "FCBarcelona", "RealMadrid", "AtleticoMadrid", "SevillaFC", "RealSociedad", 
        "RealBetisBalompié", "VillarrealCF", "AthleticBilbao", "ValenciaCF", "RCDEspanyol", 
        "CeltaVigo", "Osasuna", "GranadaCF", "GetafeCF", "ElcheCF", 
        "LevanteUD", "Mallorca", "RayoVallecano", "DeportivoAlavés", "CádizCF"
    ],
    bundesliga: [
        "BayernMunich", "BorussiaDortmund", "RBLeipzig", "BayerLeverkusen", 
        "BorussiaMönchengladbach", "EintrachtFrankfurt", "Wolfsburg", "UnionBerlin", 
        "Hoffenheim", "SCFreiburg", "Stuttgart", "Mainz", "Augsburg", 
        "HerthaBerlin", "ArminiaBielefeld", "Bochum", "GreutherFürth"
    ],
    serieA: [
        "Juventus", "InterMilan", "ACMilan", "Napoli", "Roma", 
        "SSLazio", "Atalanta", "Fiorentina", "Sassuolo", "Sampdoria", 
        "Torino", "Udinese", "Bologna", "Spezia", "Verona", 
        "Cagliari", "Genoa", "Salernitana", "Empoli", "Venezia"
    ],
    ligue1: [
        "ParisSaintGermain", "Lille", "Lyon", "Marseille", "Monaco", 
        "Rennes", "Nice", "Montpellier", "Lens", "SaintEtienne", 
        "Angers", "Bordeaux", "Nantes", "Strasbourg", "Reims", 
        "Metz", "Brest", "Lorient", "Troyes", "ClermontFoot"
    ]
};

document.getElementById('selectTeams').addEventListener('click', function() {
    const allTeams = Object.entries(leagues).flatMap(([league, teams]) => 
        teams.map(team => ({ team, league }))
    );

    const team1Index = Math.floor(Math.random() * allTeams.length);
    let team2Index;

    do {
        team2Index = Math.floor(Math.random() * allTeams.length);
    } while (team2Index === team1Index);

    const team1 = allTeams[team1Index];
    const team2 = allTeams[team2Index];

    document.getElementById('player1TeamName').textContent = team1.team;
    document.getElementById('player1League').textContent = `League: ${team1.league}`;
    document.getElementById('player1TeamLogo').src = `logos/${team1.team.replace(/\s+/g, '')}.png`;
    document.getElementById('player1Info').style.display = 'block';

    document.getElementById('player2TeamName').textContent = team2.team;
    document.getElementById('player2League').textContent = `League: ${team2.league}`;
    document.getElementById('player2TeamLogo').src = `logos/${team2.team.replace(/\s+/g, '')}.png`;
    document.getElementById('player2Info').style.display = 'block';
});
