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
            html += "<li><img src='" + element.crestUrl + "' height='100px' width='100px'/> " + element.name + "</li>";

        });
        document.getElementById("teams").innerHTML = html;
    })