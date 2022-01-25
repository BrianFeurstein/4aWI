import Car from './Car.js';
import Engine from './Engine.js';

alert("test");


let c1 = new Car("Ferrari1");
let c2 = new Car("BMW 2");

let e1 = new Engine("123");
let e2 = new Engine("456");

c1.setEngine(e1);

c1.drive();