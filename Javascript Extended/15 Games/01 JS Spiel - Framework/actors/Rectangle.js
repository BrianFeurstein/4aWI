import actor from "./actor.js";

export default class Rectangle extends actor{

    constructor(x = 10,y = 10){
        super();
        this.x = x;
        this.y = y;
    }


    render(context){
        context.fillRect(this.x,this.y,100,100);
    }

    update(){
        console.log("update");
        this.x += 10;
       
    }
}