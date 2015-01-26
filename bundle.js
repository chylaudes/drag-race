window.addEventListener("load", function () {
stage();

});

window.addEventListener('keyup', function(event) {
      if (event.keyCode === 13 ) {
  var driverDiv = document.getElementById('driver');
  driverDiv.style.left = "5px";
  var engine = window.addEventListener('keyup', function(event) {
      if (event.keyCode === 39) {
        driverDiv.style.left = parseInt(driverDiv.style.left, 10) + 1 + "px";
      }
      if (event.keyCode === 37) {
        driverDiv.style.left = parseInt(driverDiv.style.left, 10) - 1 + "px";
      }
});
        engine();
}});








// What happens when the driver enters the stage:
function stage (event) {

var driverDiv = document.getElementById('driver');
var stagelights = document.querySelector("#stagelight div");
// What happens when the STAGE light turns green:
function changeStageGreen() {
  stagelights.setAttribute("background-color", "green");
  var start = SetInterval(flashlights, 10000);
  var start1 = SetInterval(flashlights1, 11000);
  var start2 = SetInterval(flashlights2, 12000);
  var greenlight = SetInterval(greenlights, 13000);


// the functions of all the start lights as they flash




  function flashlights() {
    var startlight = document.querySelector(".startlight div");
    function flashyellow() {
      startlight.setAttribute("background-color", "yellow");}
      flashyellow();
  }
  function flashlights1() {
    var startlight = document.querySelector(".startlight1 div");
    function flashyellow() {
      startlight.setAttribute("background-color", "yellow");}
      flashyellow();
  }

  function flashlights2() {
    var startlight = document.querySelector(".startlight2 div");
    function flashyellow() {
      startlight.setAttribute("background-color", "yellow");}
      flashyellow();
  }

  function greenlights() {
    var green = document.querySelector(".greenlight div");
    function flashgreen() {
      green.setAttribute("background-color", "green");}
      flashgreen();
      window.clearTimeout(changeStageRed);
  }
}






function changeStageRed() {
  stagelights.setAttribute("background-color", "red");
  alert("False Start!");
}
if (driverDiv.style.left >= "63px" && driverDiv.style.left < "85px") {
  changeStageGreen();
}
if (driverDiv.style.left > "85px") {
  changeStageRed();
}}







