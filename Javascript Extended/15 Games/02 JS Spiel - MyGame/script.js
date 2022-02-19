import Rectangle from "./actors/Rectangle.js";
import Circle from "./actors/Circle.js";
import Square from "./actors/Square.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const actors = [];
actors.push(new Rectangle(0,200));
actors.push(new Circle(200, 0));
actors.push(new Square(200,200));


setInterval(function(){
    context.clearRect(0,0,400,400);
      actors.forEach(actor => {
        actor.update();
        actor.render(context);
      });

      
},100)


