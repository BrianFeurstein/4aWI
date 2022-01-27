export default class Remote {
    constructor(status) {
        this.status = status;
    }

    getStatus() {
        console.log(" I am running " + this.status);
    }


}