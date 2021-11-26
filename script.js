// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let pilotName = document.querySelector("input[name=pilotName]");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoMass = document.querySelector("input[name=cargoMass]");
  let list = document.querySelector("#faultyItems");

  form.addEventListener("submit", function (event) {
    formSubmission(
      document,
      list,
      pilotName,
      copilotName,
      fuelLevel,
      cargoMass
    );
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      pickPlanet();
      addDestinationInfo(
        document,
        listedPlanets[3].name,
        listedPlanets[3].diameter,
        listedPlanets[3].star,
        listedPlanets[3].distance,
        listedPlanets[3].moons,
        listedPlanets[3].image
      );
    });
});
