// Code your solution in this file.
function lowerCaseDrivers(drivers) {
   return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  return  drivers.map(function(driver) {
    const newDriver = driver.split(" ");
    return  { firstName: newDriver[0], lastName: newDriver[1] };
  });
}

function attributesToPhrase(drivers) {
  return  drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
