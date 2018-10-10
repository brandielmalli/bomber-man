//get my information about my image and store it in a variable
var crash =document.getElementById('cartoon');
var x= 0
var y= 0
//create an event
// Event Listener for the up button
document.getElementById('up').onclick= moveUp

// Event Listener for the down button
document.getElementById('down').onclick= moveDown

// Event Listener for the left button
document.getElementById('left').onclick= moveLeft

// Event Listener for the right button
document.getElementById('right').onclick= moveRight

// Function to move image up
function moveUp(){
  x-=10
  crash.style.top = x + 'px'
}

// Function to move image DOWN
function moveDown(){
  x+=10
  crash.style.top = x + 'px'
}

// Function to move image LEFT
function moveLeft(){
  y-=10
  crash.style.left = y + 'px'
}

// Function to move image right
function moveRight(){
  y+=10
  crash.style.left = y + 'px'
}

// Event for arrow keys
document.onkeydown = keyPress


// Object for storing key code pressed
var keyState= {};

function keyPress(e){
  keyState[e.keyCode]= true
  e = e || window.event
  if(keyState['37'] === true){
    moveLeft()
  }
  if(keyState['38']=== true){
    moveUp()
  }
  if(keyState['39']=== true){
    moveRight()
  }
  if(keyState['40']=== true){
    moveDown()
  }
}



document.onkeyup= keyUp
function keyUp(e) {
  keyState[e.keyCode]= false
}
