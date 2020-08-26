var ImageCycleResizer = require("./index");

let i = new ImageCycleResizer("in/1.jpg");

let fz = i.setStep("/2").setLimit(300*1024).save( "out/1.jpg", 100 );
// let fz = i.setStep("/2").setLimit(300*1024).start( ".jpg", 100 );

console.log( fz||"error" )