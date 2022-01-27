import Battery from './Battery.js';
import Remote from './Remote.js';


let remoteC1 = new Remote(20);
remoteC1.getStatus();

let batteryc2 = new Battery(50);
batteryc2.getStatus();