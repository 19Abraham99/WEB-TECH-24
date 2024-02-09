let dt= new Date()
let ct= dt.toLocaleTimeString()
setInterval(document.getElementById('abc').innerHTML=ct,1000);