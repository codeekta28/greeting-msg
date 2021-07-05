console.log("This is app.js file")

let currentDate = new Date("23 july 2020 14:32:43");
let hours=currentDate.getHours();
let userName = prompt("Enter your name");

document.querySelector("#userName").innerHTML = userName;
function greetingCalculate(){
    if(hours<=12){
        console.log("goodMorning");
        greetingsShow("Good Morning","Orange");
    }else if(hours>12 && hours<18){
        console.log("Good AfterNoon")
        greetingsShow("Good Afternoon"," yellowGreen");
    }else{
        console.log("good evening");
        greetingsShow("Good Night","Red");
    }
}
greetingCalculate();

function greetingsShow(message,color){
    document.querySelector(".greeting").innerHTML = message;
    document.querySelector(".greeting").style.color = color;
  
}

