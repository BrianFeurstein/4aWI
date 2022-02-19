import actor from "./actor.js";



export default class Square extends actor{

    constructor(x,y ){
        super();
        this.x = x;
        this.y = y;
        
       
    }

    
    render(context){
        
        context.fillRect(this.x,this.y,20,20);
    }
    
    
    update(){
        let PositionX = this.x;
        let PositionY = this.y;
       
      
        window.addEventListener("keydown", moveSquare);
        function moveSquare(evt){
            
            
            switch(evt.keyCode)
            {
                // Buchstabe J - links
                case 74:
                    PositionX = PositionX - 10;

                    console.log(PositionX)
                    break;
                    

                    
    
                // Buchstabe I - oben
                case 73:
                   // PositionY += 10;
                    break;
                   
    
                // Buchstabe L - rechts
                case 76:


                    break;
                   
    
                // Buchstabe M - unten
                case 77:


                    break;
                   
                    
            }

        this.x = PositionX
        console.log(this.x)

            
    
        }
        
        
           
    }
    
        
    
}

