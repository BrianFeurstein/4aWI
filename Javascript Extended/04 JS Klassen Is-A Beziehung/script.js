import Car from './Car.js';
import Engine from './Engine.js';
import SuperCar from './SuperCar.js';


let e1 = new Engine("123");
let c1 = new Car("Ferrari1");
c1.setEngine(e1);
let c2 = new SuperCar("sc1");
c2.setEngine(e1);
c1.drive();
c2.drive();
c2.saySomethingSuperDuper();
