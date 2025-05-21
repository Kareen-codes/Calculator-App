let calculation = localStorage.getItem('calculation') || '';
displayCalculation();


function updateCalculation(value){
 calculation += value;
 
 displayCalculation();
 localStorage.setItem("calculation", calculation);
}

function equalsTo(){
 calculation = eval(calculation); 
 displayCalculation();
 localStorage.setItem("calculation", calculation);
}

function displayCalculation(){
  document.querySelector(".cal").innerHTML = calculation;
 }
function cleared(){
 calculation = '';

 displayCalculation();
 localStorage.setItem("calculation", calculation);
}
function deleted(){
  
   calculation = calculation.slice(0, -1);
   displayCalculation();
    
    localStorage.setItem("calculation", calculation);
}