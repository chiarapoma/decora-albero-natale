let clientSocket = io(); //activate socket on server side

clientSocket.on("connect", newConnection);

clientSocket.on("mouseBroadcast", newBroadcast);

let myImage;

function preload() {
  myImage = loadImage("./public/assets/albero.jpg"); // percorso per trovare file
}

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);

  fill("orange");

  circle(data.x, data.y, 20);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER); // posiziona dal centro dell'immagine
  image(
    myImage,
    width / 2, //posizione dell'immagine al centro
    height / 2
  );
}

function draw() {
  fill("red");
}

function mouseClicked() {
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
