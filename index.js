console.log("Hello world!");

function pushed(){
  let currentDate = new Date();
  let milliSeconds = currentDate.getTime();
  console.log("Button pushed on Date: " + currentDate);
  console.log("Milliseconds passed since 1970: " + milliSeconds);
}
