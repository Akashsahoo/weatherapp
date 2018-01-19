console.log("startingapp");
setTimeout(()=>{
  console.log("inside of callback");
},2000

);
setTimeout(()=>{
  console.log("second  settimeout");

},0);
console.log("endingapp");
