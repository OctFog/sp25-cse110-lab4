// CSE 110 SP25
// Xiaogeng Xu
// A program that prints out the current time every second. 
 
setInterval(() => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }, 1000);  