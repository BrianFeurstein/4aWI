let config = {
    startday: 4,
    month: [
        { name: "Januar", day: 31 },
        { name: "Februar", day: 28 },
        { name: "März", day: 31 },
        { name: "April", day: 30 },
        { name: "Mai", day: 31 },
        { name: "Juni", day: 30 },
        { name: "Juli", day: 31 },
        { name: "August", day: 31 },
        { name: "September", day: 30 },
        { name: "Oktober", day: 31 },
        { name: "November", day: 30 },
        { name: "Dezember", day: 31 }
    ],
    Wochentag: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"]

}



function printWochentag() {
    for (i = 0; i < config.Wochentag.length; i++) {

        console.log(config.Wochentag);
        //const i = config.month[day];
    }
    return console.log(config.Wochentag);;

}
printWochentag();