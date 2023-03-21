const kmPrice = 0.21,
      personalData = document.getElementById("name-form"),
      userKm = document.getElementById("km-form"),
      genera = document.querySelector(".genera-biglietto"),
      age = document.getElementById("age-form")

let prezzoBiglietto

genera.addEventListener("click", function(){
  if (personalData.value == ""){
    alert("completa il form")
  }
  
  prezzoBiglietto = kmPrice * userKm.value;
  console.log("prova" , prezzoBiglietto)
  
  
  if(age.value == "under-18"){
    prezzoBiglietto = prezzoBiglietto * 0.8
    console.log(`il biglietto` + personalData.value + `costa` + prezzoBiglietto.toFixed(2))
  }
  
  if(age.value == "18"){
    prezzoBiglietto = prezzoBiglietto
    console.log(`il biglietto` + personalData.value + `costa` + prezzoBiglietto.toFixed(2))
  }
  
  if(age.value == "over-65"){
    prezzoBiglietto = prezzoBiglietto * 0.6
    console.log(`il biglietto` +  personalData.value + `costa` + prezzoBiglietto.toFixed(2))
  }
}
)