let lat = 0;
let long = 0;
function getCoordinate() {
  let temp;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  } else {
    console.log(`error!`);
  }
  return temp;
}

function getPosition(pos) {
  console.log(
    `Latitude: ${pos.coords.latitude}, longitude:${pos.coords.longitude}`
  );
  lat = pos.coords.latitude;
  long = pos.coords.longitude;
  //   return { latitude: pos.coords.latitude, longitude: pos.coords.longitude };
}
getCoordinate();

// async function getCityName(latpos, longpos) {
//   console.log(latpos);
//   console.log(longpos);
//   let response = await fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latpos}&longitude=${longpos}&localityLanguage=en`
//   );
//   let data = await response.json();
//   console.log(data);
// }

const req = new XMLHttpRequest();
req.open("GET", "https://api.bigdatacloud.net/data/reverse-geocode-client");
req.send();
console.log(req);
