// Write your helper functions here!
// require('isomorphic-fetch');

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     let div = document.getElementById("missionTarget");
//     div.innerHTML = `
//     <h2>Mission Destination</h2>
//     <ol>
//       <li>Name:${name}</li>
//       <li>Diameter:${diameter}</li>
//       <li>Star:${star}</li>
//       <li>Distance from Earth:${distance}</li>
//       <li>Number of Moons:${moons}</li>
//     </ol>
//     <img src ="${imageUrl}">
//     `;
//    // Here is the HTML formatting for our mission target div.
//    /*
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
//    */
// }

// function validateInput(testInput) {
//     if(testInput === "") {
//         return "Empty";
//     }else if (isNaN(testInput) === true){
//         return "Not a Number";
//     }else if(isNaN(testInput) === false){
//         return "Is a Number";
//     }  
// }

// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

//     let pilotStatus = document.getElementById('pilotStatus');
//     let copilotStatus = document.getElementById('copilotStatus');
//     let fuelStatus = document.getElementById('fuelStatus');
//     let cargoStatus = document.getElementById('cargoStatus');

//     if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
//         alert("All fields are required!");
//     } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
//         alert("Make sure to enter valid information for each field!");
//     } else {
//         list.style.visibility = "visible";
//         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
//         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
//         let launchStatus = document.getElementById('launchStatus');
//         if(fuelLevel < 10000 && cargoLevel >= 10000 ){
//             fuelStatus.innerHTML = "Fuel level too low for launch";
//             cargoStatus.innerHTML = "Low enough cargo mass for the shuttle to take off"
//             launchStatus.innerHTML = "Shuttle not ready for launch";
//             list.style.color = "rgb(199, 37, 78)";
//         }else if(cargoLevel > 10000 && fuelLevel >= 10000){
//             cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
//             fuelLevel.innerHTML = "Fuel level high engough for launch";
//             cargoStatus.innerHTML = "Shuttle not ready for launch";
//             list.style.color = "rgb(199, 37, 78)";
//         }else if (fuelLevel < 10000 && cargoLevel > 10000 ){
//             fuelStatus.innerHTML = "Fuel level too low for launch";
//             cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
//             cargoStatus.innerHTML = "Shuttle not ready for launch";
//             list.style.color = "rgb(199, 37, 78)";
//         }else {
//             fuelLevel.innerHTML = "Fuel level high engough for launch"; 
//             fuelStatus.innerHTML = "Fuel level too low for launch";
//             launchStatus.innerHTML = "Shuttle ready for launch";
//             list.style.color = "rgb(65, 159, 106)";
//         }
//     }
    
// }
 

// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//         return response.json()
//         });

//     return planetsReturned;
// }

// function pickPlanet(planets) {
//     let i = Math.floor(Math.random()* planets.length);
//     return planets[i];
// }

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let div = document.getElementById("missionTarget");
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
   let numberInput = Number(testInput);
   if (testInput === "")
   {
       return "Empty";
   }
   else if (isNaN(numberInput))
   {
       return "Not a Number";
   }
   else if (isNaN(numberInput) === false)
   {
       return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let fuel = document.getElementById("fuelStatus");
   let cargo = document.getElementById("cargoStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
       alert("All fields are required!");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
       alert("Make sure to enter valid information for each field!");
   } else {
       list.style.visibility = "visible";
       pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
       copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
       let launchStatus = document.getElementById("launchStatus");
       if (fuelLevel < 10000 && cargoLevel <= 10000) {
           fuel.innerHTML = "Fuel level too low for launch";
           cargo.innerHTML = "Cargo mass low enough for launch"
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "#C7254E";
       } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
           fuel.innerHTML = "Fuel level high enough for launch"
           cargo.innerHTML = "Cargo mass too heavy for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "#C7254E";
       } else if (fuelLevel < 10000 && cargoLevel > 10000) {
           fuel.innerHTML = "Fuel level too low for launch";
           cargo.innerHTML = "Cargo mass too heavy for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "#C7254E";
       } else {
           fuel.innerHTML = "Fuel level high enough for launch"
           cargo.innerHTML = "Cargo mass low enough for launch"
           launchStatus.innerHTML = "Shuttle is Ready for Launch";
           launchStatus.style.color = "#419F6A";
       }
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()

        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let idx = Math.floor(Math.random() * planets.length);
    return planets[idx];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
