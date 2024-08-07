const leagues = {
    premierLeague: [
        "ManchesterUnited", "Liverpool", "Chelsea", "Arsenal", "ManchesterCity", 
        "TottenhamHotspur", "Leicester City", "WestHamUnited", "Everton", "AstonVilla", 
        "Leeds United", "Wolverhampton Wanderers", "Crystal Palace", "Newcastle United", 
        "Brighton & Hove Albion", "Burnley", "Southampton", "Norwich City", "Watford", "Brentford"
    ],
    laLiga: [
        "FC Barcelona", "Real Madrid", "Atletico Madrid", "Sevilla FC", "Real Sociedad", 
        "Real Betis Balompié", "Villarreal CF", "Athletic Club", "Valencia CF", "RCD Espanyol", 
        "Celta Vigo", "Osasuna", "Granada CF", "Getafe CF", "Elche CF", 
        "Levante UD", "Mallorca", "Rayo Vallecano", "Deportivo Alavés", "Cádiz CF"
    ],
    bundesliga: [
        "Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen", 
        "Borussia Mönchengladbach", "Eintracht Frankfurt", "Wolfsburg", "Union Berlin", 
        "Hoffenheim", "SC Freiburg", "Stuttgart", "Mainz", "Augsburg", 
        "Hertha Berlin", "Arminia Bielefeld", "Bochum", "Greuther Fürth"
    ],
    serieA: [
        "Juventus", "Inter Milan", "AC Milan", "Napoli", "Roma", 
        "SS Lazio", "Atalanta", "Fiorentina", "Sassuolo", "Sampdoria", 
        "Torino", "Udinese", "Bologna", "Spezia", "Verona", 
        "Cagliari", "Genoa", "Salernitana", "Empoli", "Venezia"
    ],
    ligue1: [
        "Paris Saint-Germain", "Lille", "Lyon", "Marseille", "Monaco", 
        "Rennes", "Nice", "Montpellier", "Lens", "Saint-Etienne", 
        "Angers", "Bordeaux", "Nantes", "Strasbourg", "Reims", 
        "Metz", "Brest", "Lorient", "Troyes", "Clermont Foot"
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
