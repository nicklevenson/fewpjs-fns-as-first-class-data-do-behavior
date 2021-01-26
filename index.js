/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hours = parseInt(time.split(":")[0])
  const minutes = parseInt(time.split(":")[1])
  if(hours < 12){
    return "Good Morning"
  }
  else if(hours >= 12 && hours < 17){
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const heading = document.getElementById("greeting") 
  heading.innerHTML = `${string}`
}