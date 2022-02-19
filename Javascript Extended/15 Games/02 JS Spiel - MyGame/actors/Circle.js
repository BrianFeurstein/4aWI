import actor from "./actor.js";


export default class Circle extends actor{

    constructor(x,y){
        super();
        this.x = x;
        this.y = y;
        
       
    }

    render(context){
       
        context.beginPath();
        context.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        context.stroke();
    }

    update(){
        
          if(this.y < 400){
              this.y += 10;
          }
          if(this.y == 400){
              this.y = 0;
          }
         
          
        
    }
   
}