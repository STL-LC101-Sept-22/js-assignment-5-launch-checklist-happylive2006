
// Write your JavaScript code here!
//  In scriptHelper.js, you have three functions for this task: myFetch(), pickPlanet(), and addDestinationInfo().
//  First, review the comments in addDestinationInfo(). 
// This is the format of the innerHTML for the missionTarget div, 
//   which you can locate using the document parameter of addDestinationInfo(). addDestinationInfo() does not need to return anything. 
// pickPlanet() takes in one argument: a list of planets. Using Math.random(),
// return one planet from the list with a randomly-selected index.
//  myFetch() has some of the code necessary for fetching planetary JSON, however,
//    it is not complete. You need to add the URL and return response.json().                  
// window.addEventListener("load", function() {

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);  
    })
    
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let = document.querySelector("form");
 
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById('faultyItems');
 
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
 });

