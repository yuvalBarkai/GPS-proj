/// <reference path="jquery-3.6.0.js" />

//boundris of current's using map
const bottomRight = {x: 35.145776, y: 31.72717};
const bottomLeft = {x: 35.145776, y: 31.72717};
const topLeft = {x: 35.2954, y: 31.8084};
const topRight = {x: 35.2954, y: 31.8084};
let cursorX = 0;
let cursorY = 0;

const intervalInc = 1000;

/* To Do:

*/

//$("#map").html(`<img src="Assets/malcha.png" alt="" srcset="" height="100%" width="100%">`);
// 35.225758190283, 31.75259683400189 HOME geolocation


//   _OBJECTS_

//$("#container")
//$("#menu")
//$("#map")
//$("#settingsButton")


/* $("#map").on("zoom", () => {
    alert("Wait for it, it will worth it !")
}) */

$("#map").on("click", (e) => {
    cursorX = e.pageX - 202;
    cursorY = e.pageY - 81;

    // let cursorX = e.pageX / 709 * 98;
    // let cursorY = e.pageY / 440 * 96;

    console.log(cursorX, cursorY);

    //$("#selectLocation").css("display", "block");
    $("#selectLocation").css("left", cursorX);
    $("#selectLocation").css("top", cursorY);

    //alert("still working on it");
    
    // x: 159 - 868
    // y: 61 - 528
});

let locationCheck;

setTimeout(function showLoc() {
    $("#curLocation").css("display", "inline-block");
/*     locationCheck = setInterval(getLocation, intervalInc); */
}, 2000);


(function getLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
        let c = pos.coords;
        console.log("longitude (x) = " + c.longitude, "latitude (y) = " + c.latitude);
        showLocation(c.longitude, c.latitude);
    }); //  longitude = x, latitude = y
})();

function showLocation(x, y) {
    if (x > bottomRight.x || x < bottomLeft.x || y < bottomLeft.y || y > topRight.y) {
        
        console.log("Error: location is outside boundries.");
    } else {
        //console.log(x, y);
        let putX = (x - bottomLeft.x) / (topRight.x - topLeft.x) * 98;
        let putY = (y - bottomLeft.y) / (topLeft.y - bottomLeft.y) * 96;
        $("#curLocation").css("bottom", putY + "%");
        $("#curLocation").css("left", putX + "%");
    }
}

function settings() {
    //clearInterval(locationCheck);
    $("body").css("background-color", "rgb(107, 107, 136)");
    $("#settingsWindow").css("display", "block");
    $("#map").css("opacity", "50%");
}

function resume() {
    //locationCheck = setInterval(getLocation, intervalInc);
    $("body").css("background-color", "rgb(71, 71, 255)");
    $("#settingsWindow").css("display", "none");
    $("#map").css("opacity", "100%");
}