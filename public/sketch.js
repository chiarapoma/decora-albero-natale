let clientSocket = io(); //activate socket on server side

clientSocket.on("connect", newConnection);

clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);

  fill("orange");
  circle(data.x, data.y, 10);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  fill("red");

  circle(mouseX, mouseY, 20);
}

function mouseMoved() {
  let message = {
    //object contain mouse positzion
    x: mouseX,
    y: mouseY,
  };
  clientSocket.emit("mouse", message); //send to the server calling it mouse
}
