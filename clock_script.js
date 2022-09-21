const meridiemP = document.getElementById("meridiemP")
const hourP = document.getElementById("hourP")
const minP = document.getElementById("minP")


function getTime(){
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();

  if(hour < 12){
    meridiemP.textContent = "AM"
  }
  else{
    meridiemP.textContent = "PM"
    hour = hour - 12
  }
  
  hourP.textContent = hour < 10 ? `0${hour}` : hour
  minP.textContent = minute < 10 ? `0${minute}` : minute
}

getTime()
setInterval(getTime, 1000);

