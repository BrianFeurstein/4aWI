let config = {
    offset: 0,
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

    console.log(" | " + config.Wochentag.join(" | ")); //Mo-So

}


function printMonth() {

    for (let p = 0; p < 12; p++) {
        printWochentag();
        let example = "";
        offset(p);



        for (let i = 1; i <= config.month[p].day; i++) {


            example += " | " + i;

            if (i % 7 == 0) {
                console.log(example);
                example = "";

            } else if (i == config.month[p].day) {
                console.log(example);
                example = "";
            }
        }
    }
}






function offset(p) {
    config.offset = config.offset + config.month[p].day % 7;

    if (config.offset > 7) {
        config.offset = config.offset % 7;
    }

    let offset = "";
    for (i = 1; i <= config.offset; i++) {
        offset += " | - |";
    }
    console.log(offset);


}

printMonth();