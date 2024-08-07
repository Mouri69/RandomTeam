const leagues = {
    premierLeague: [
        "Manchester United", "Liverpool", "Chelsea", "Arsenal", "Manchester City", 
        "Tottenham Hotspur", "Leicester City", "West Ham United", "Everton", "Aston Villa", 
        "Leeds United", "Wolverhampton Wanderers", "Crystal Palace", "Newcastle United", 
        "Brighton & Hove Albion", "Burnley", "Southampton", "Norwich City", "Watford", "Brentford"
    ],
    laLiga: [
        "Barcelona", "Real Madrid", "Atletico Madrid", "Sevilla", "Real Sociedad", 
        "Real Betis", "Villarreal", "Athletic Bilbao", "Valencia", "Espanyol", 
        "Celta Vigo", "Osasuna", "Granada", "Getafe", "Elche", 
        "Levante", "Mallorca", "Rayo Vallecano", "Alaves", "Cadiz"
    ],
    bundesliga: [
        "Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen", 
        "Borussia Mönchengladbach", "Eintracht Frankfurt", "Wolfsburg", "Union Berlin", 
        "Hoffenheim", "Freiburg", "Stuttgart", "Mainz", "Augsburg", 
        "Hertha Berlin", "Arminia Bielefeld", "Bochum", "Greuther Fürth"
    ],
    serieA: [
        "Juventus", "Inter Milan", "AC Milan", "Napoli", "Roma", 
        "Lazio", "Atalanta", "Fiorentina", "Sassuolo", "Sampdoria", 
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
    const allTeams = Object.values(leagues).flat();
    const team1Index = Math.floor(Math.random() * allTeams.length);
    let team2Index;
    
    do {
        team2Index = Math.floor(Math.random() * allTeams.length);
    } while (team2Index === team1Index);

    const team1 = allTeams[team1Index];
    const team2 = allTeams[team2Index];
    
    document.getElementById('player1TeamName').textContent = team1;
    document.getElementById('player1TeamLogo').src = `images/${team1.replace(/\s+/g, '').toLowerCase()}.png`;
    document.getElementById('player1Info').style.display = 'block';
    
    document.getElementById('player2TeamName').textContent = team2;
    document.getElementById('player2TeamLogo').src = `images/${team2.replace(/\s+/g, '').toLowerCase()}.png`;
    document.getElementById('player2Info').style.display = 'block';
});
