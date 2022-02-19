import actor from "./actor.js";

let boolean;

export default class Rectangle extends actor{

    constructor(x,y ){
        super();
        this.x = x;
        this.y = y;
        
       
    }

    render(context){
        context.fillRect(this.x,this.y,50,20);
    }

    update(){
        
    if(this.x >= 400){
        boolean = false;
      }
      else if(this.x <= 0){
          boolean = true;
      }
     
      if(boolean == false){
          this.x -=10;
      }
      else{
          this.x += 10;
      }
    

    }
   
}