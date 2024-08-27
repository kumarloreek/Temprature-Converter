'user strick';

//  PRELOADED
//  loading will be end after document is loadede

let loadeder = document.querySelector("[data-preloaded]");
window.addEventListener("load",()=>{
    loadeder.classList.add("loaded");
    document.body.classList.add("loaded");
});


// CONVERTING LOGIC


let  convertTemperature = (value, fromUnit,toUnit)=> {
    let celsius, fahrenheit, kelvin, rankine;

    switch (fromUnit) {
        // case 'celsius':
        case 'C':
            celsius = value;
            fahrenheit = (value * 9/5) + 32;
            kelvin = value + 273.15;
            rankine = (value + 273.15) * 9/5;
            break;

        // case 'fahrenheit':
        case 'F':
            celsius = (value - 32) * 5/9;
            fahrenheit = value;
            kelvin = (value + 459.67) * 5/9;
            rankine = value + 459.67;
            break;

        // case 'kelvin':
        case 'K':
            celsius = value - 273.15;
            fahrenheit = (value * 9/5) - 459.67;
            kelvin = value;
            rankine = value * 9/5;
            break;

        // case 'rankine':
        case 'R':
            celsius = (value - 491.67) * 5/9;
            fahrenheit = value - 459.67;
            kelvin = value * 5/9;
            rankine = value;
            break;

        default:
            return 'Invalid unit!';
    }


    switch (toUnit) {
        // case 'celsius':
        case 'C':
           return celsius;
           

        // case 'fahrenheit':
        case 'F':
           return fahrenheit;
           

        // case 'kelvin':
        case 'K':
              return kelvin;
            

        // case 'rankine':
        case 'R':
            return rankine;
           

        default:
            return 'Invalid unit!';
    }



 
}


let fromUnit = document.querySelector("#fromUnit");
let toUnit = document.querySelector("#toUnit");
let temprature = document.querySelector("#temprature");
let btn = document.querySelector("#convert");
let result = document.querySelector("#result");


let inviledTo = document.querySelector(".inviledTo");
let inviledFrom = document.querySelector(".inviledFrom");
let inviledtemp = document.querySelector(".inviledtemp");

btn.addEventListener("click",()=>{
    // console.log(fromUnit.value);
    // console.log(toUnit.value);
    // console.log(temprature.value);
//    console.log(convertTemperature(temprature.value,fromUnit.value,toUnit.value));
   if(temprature.value == ""){
    inviledtemp.style.visibility = "visible";
   } else{
    inviledtemp.style.visibility = "hidden";
   }

   if(fromUnit.value == 'N'){
    inviledFrom.style.visibility="visible";
   }else{
    inviledFrom.style.visibility="hidden";
   }

   if(toUnit.value == 'N'){
    inviledTo.style.visibility="visible";
   } else{
    inviledTo.style.visibility="hidden";
   }
   result.value = convertTemperature(temprature.value,fromUnit.value,toUnit.value);
});


let about = document.querySelector(".about");
let main = document.querySelector(".main");
let header = document.querySelector(".heading");

window.addEventListener("scroll",()=>{
    let y = window.scrollY;
    // console.log(y);
    
    if(y > 80){
      main.style.zIndex = -1;
    //   console.log("yes");
    header.style.backgroundColor="#829CBA";
    
    } else{
        main.style.zIndex = 0;
        header.style.backgroundColor="transparent";
        // console.log("no");
    }
    // console.log(y);
})