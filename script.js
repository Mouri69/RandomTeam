const leagues = {
    premierLeague: [
        "ManchesterUnited", "Liverpool", "Chelsea", "Arsenal", "ManchesterCity", 
        "TottenhamHotspur", "Leicester City", "WestHamUnited", "Everton", "AstonVilla", 
        "LeedsUnited", "WolverhamptonWanderers", "CrystalPalace", "NewcastleUnited", 
        "BrightonHoveAlbion", "Burnley", "Southampton", "NorwichCity", "Watford", "Brentford"
    ],
    laLiga: [
        "FCBarcelona", "Real Madrid", "AtleticoMadrid", "SevillaFC", "RealSociedad", 
        "RealBetisBalompié", "VillarrealCF", "Athletic Club", "ValenciaCF", "RCDEspanyol", 
        "CeltaVigo", "Osasuna", "GranadaCF", "GetafeCF", "ElcheCF", 
        "Levante UD", "Mallorca", "RayoVallecano", "DeportivoAlavés", "CádizCF", "AthleticBilbao"
    ],
    bundesliga: [
        "BayernMunich", "BorussiaDortmund", "RBLeipzig", "BayerLeverkusen", 
        "BorussiaMönchengladbach", "EintrachtFrankfurt", "Wolfsburg", "UnionBerlin", 
        "Hoffenheim", "SCFreiburg", "Stuttgart", "Mainz", "Augsburg", 
        "HerthaBerlin", "Arminia Bielefeld", "Bochum", "Greuther Fürth", "FCSchalke04"
    ],
    serieA: [
        "Juventus", "InterMilan", "ACMilan", "Napoli", "Roma", 
        "SSLazio", "Atalanta", "Fiorentina", "Sassuolo", "Sampdoria", 
        "Torino", "Udinese", "Bologna", "Spezia", "Verona", 
        "Cagliari", "Genoa", "Salernitana", "Empoli", "Venezia"
    ],
    ligue1: [
        "ParisSaintGermain", "Lille", "Lyon", "Marseille", "Monaco", 
        "Rennes", "Nice", "Montpellier", "Lens", "Saint-Etienne", 
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
    document.getElementById('player1TeamLogo').src = `logos/${team1.team.replace(/\s+/g, '').toLowerCase()}.png`;
    document.getElementById('player1Info').style.display = 'block';
    
    document.getElementById('player2TeamName').textContent = team2.team;
    document.getElementById('player2League').textContent = `League: ${team2.league}`;
    document.getElementById('player2TeamLogo').src = `logos/${team2.team.replace(/\s+/g, '').toLowerCase()}.png`;
    document.getElementById('player2Info').style.display = 'block';
});
