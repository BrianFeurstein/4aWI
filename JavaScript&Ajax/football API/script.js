let urlTeams = "https://api.football-data.org/v2/competitions/2002/teams"

fetch(urlTeams, {
    method: "GET",

    headers: {
        "x-auth-token": "98f8def4c554457ca47c328f3a3cf32d"
    }
})

.then(response => response.json())
    .then(function(data) {
        let html = "";
        data.teams.forEach(element => {
            html += "<ul><li><img src='" + element.crestUrl + "' height='60px' width='60px'/> <br>" + element.name + "</li></ul>";
            html += "<ul><li>" + "Clubfarbe:" + element.clubColors + "<br></li></ul>";
            html += "<ul><li>" + "Gegründet:" + element.founded + "<br></li></ul>";
            html += "<ul><li>" + "Address:" + element.address + "<br></li></ul>";
            html += "<ul>---------------------------------------------------------------------------------------------<br></ul>";

        });
        document.getElementById("output").innerHTML = html;
    })