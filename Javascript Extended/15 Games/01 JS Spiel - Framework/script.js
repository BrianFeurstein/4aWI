import Rectangle from "./actors/Rectangle.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const actors = [];
actors.push(new Rectangle(50,50));
actors.push(new Rectangle(100,100));


setInterval(function(){
    context.clearRect(0,0,400,400);
      actors.forEach(actor => {
          actor.update();
          actor.render(context);
      });

      
},1000)




