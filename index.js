
var myname = document.getElementById('timer')
var initialname = myname.innerHTML
myname.innerHTML="by RAVI"
var initialcountdown=1
setInterval(function(){
    initialname=initialcountdown<1001 ? initialcountdown +1:0
    myname.innerHTML="by TEJA"
   document.body.style.backgroundColor='violet'
},2000)

