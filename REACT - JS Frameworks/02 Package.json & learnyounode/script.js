/*fs = require('fs')

fs.readFile('C:\\Users\\Anwender\\OneDrive - HTL Dornbirn\\HTL Klassen\\4aWI\\SWP\\Grundlagen\\REACT - JS Frameworks\\Installation\\script.js', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})*/


const sizeOf = require('image-size')
const dimensions = sizeOf('C:\\Users\\Anwender\\Downloads\\WhatsApp Image 2021-12-25 at 11.44.57.jpeg')
console.log(dimensions.width, dimensions.height)