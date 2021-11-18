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

    console.log("|" + config.Wochentag.join("|")); //Mo-So

}


function printMonth() {

    for (let p = 0; p < 12; p++) {
        printWochentag();
        //let example = "";
        let offsetData = getOffsetString(p);
        let example = offsetData.text;
        let offsetLenght = offsetData.length;


        for (let i = 1; i <= config.month[p].day; i++) {

            if (i < 10) {
                example += "|0" + i;
            } else {
                example += "|" + i;
            }



            if ((i + offsetLenght) % 7 == 0) {
                console.log(example);
                example = "";
                //offsetLenght = 0;




            } else if (i == config.month[p].day) {
                console.log(example);
                example = "";

            }
        }
    }
}



function getOffsetString(p) {
    config.offset = config.offset + config.month[p].day % 7;

    if (config.offset >= 7) {
        config.offset = config.offset % 7;
    }

    let offset = "";
    for (i = 1; i <= config.offset; i++) {
        offset += "|-|";
    }

    let offsetData = {
        text: offset,
        length: config.offset
    }
    return offsetData;


}

printMonth();