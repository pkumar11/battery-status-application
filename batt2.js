window.onload = function() {

  function updateBatteryStatus(battery) {
      document.querySelector('#charging').textContent = battery.charging ? 'PLUGGED IN' : 'NOT PLUGGED IN';

      document.querySelector('#level').textContent = Math.floor(battery.level * 100) + "%";

console.log(battery.charging);

if(battery.charging==true){

  setInterval(function(){
    document.getElementById("set1").style.backgroundColor="green";
  },1000);
  setInterval(function(){
    document.getElementById("set2").style.backgroundColor="green";
  },2500); 
  setInterval(function(){
    document.getElementById("set3").style.backgroundColor="green";
  },3500); 
  setInterval(function(){
    document.getElementById("set4").style.backgroundColor="green";
    abx();
  },4500); 
  
  function abx(){
  setInterval(function(){
    document.getElementById("set5").style.backgroundColor="green";
  },1000);
  setInterval(function(){
    document.getElementById("set5").style.backgroundColor="rgb(10, 25, 36)";
  },2000);
}
}
else{
     document.querySelector('#dischargingTime').textContent =Math.floor(battery.dischargingTime / 60) + " minutes";
      if (battery.level >= 0.81){
        document.getElementById("set4").style.backgroundColor="green";
        document.getElementById("set3").style.backgroundColor="green";
        document.getElementById("set2").style.backgroundColor="green";
        document.getElementById("set1").style.backgroundColor="green";
        document.getElementById("set5").style.backgroundColor="green";
          
      }
      else if (battery.level >= 0.61){
        document.getElementById("set1").style.backgroundColor="#99ff33";
        document.getElementById("set2").style.backgroundColor="#99ff33";
        document.getElementById("set3").style.backgroundColor="#99ff33";
        document.getElementById("set4").style.backgroundColor="#99ff33";
      }
      else if (battery.level >= 0.41){
        document.getElementById("set1").style.backgroundColor="#ccff33";
        document.getElementById("set2").style.backgroundColor="#ccff33";
        document.getElementById("set3").style.backgroundColor="#ccff33";
          
      }else if (battery.level >= 0.21){
        document.getElementById("set1").style.backgroundColor="#ccff33";
        document.getElementById("set2").style.backgroundColor="#ccff33";
  
          
      }
      else if (battery.level >= 0.11){
        document.getElementById("set1").style.backgroundColor="#ff9900";
        document.getElementById("set2").style.backgroundColor="#ff9900";
          
      }
      else if (battery.level >= 0.01){
        document.getElementById("set1").style.backgroundColor="#ff3300";

          
      }
    }
  }

  navigator.getBattery().then(function(battery) {
      // Update the battery status initially when the promise resolves ...
      updateBatteryStatus(battery);

      // .. and for any subsequent updates.
      battery.onchargingchange = function() {
          updateBatteryStatus(battery);
      };

      battery.onlevelchange = function() {
          updateBatteryStatus(battery);
      };

      battery.ondischargingtimechange = function() {
          updateBatteryStatus(battery);
      };
  });
};
