let cleanTheRoom = () => {
  return new Promise((resolve, reject) => {
    resolve("Clean the Room!");
  })
}

let cleanTheGarbage = (message) => {
  return new Promise((resolve, reject) => {
    resolve(message + " and Clean the Garbage!!");
  })
}

let winTheCandy = (message) => {
  return new Promise((resolve, reject) => {
    resolve(message + " to Win Candy by cleaning the Romm and Garbage");
  });
}

cleanTheRoom().then((result) => {
  return cleanTheGarbage(result);
}).then((result) => {
  return winTheCandy(result);
}).then((result) => {
  console.log("All Finished! By: " + result);
})