(function(){
    const greetVisitor = ()=>{
    let date = new Date();
    let time =date.getHours();
    if(time < 12){
      return "Good Morning";
    }
    else if(time<18){
      return "Good Afternoon";
    }
     else{
      return "Good Evening";
    }
  }
  document.getElementById('sayHi').innerHTML=greetVisitor() + " !";
  // make the footer year dynamic
var thisYear =document.getElementById("thisYear"),
      date = new Date();
      year = date.getFullYear();
// append full year to thisYear variable
thisYear.innerText =year + ". ";
})();