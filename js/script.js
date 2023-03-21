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

  if (userKm.value == ""){
    alert("completa il form")
  }

  if (age.value == ""){
    alert("completa il form")
  }

  
  prezzoBiglietto = kmPrice * userKm.value;
  console.log("prova" , prezzoBiglietto)
  
  
  if(age.value == "under-18"){
    prezzoBiglietto = prezzoBiglietto * 0.8
    document.getElementById("offerta").innerHTML = "Biglietto Gold"
    document.getElementById("prezzo-finale").innerHTML = prezzoBiglietto.toFixed(2) + "euro"
  }
  
  if(age.value == "18"){
    prezzoBiglietto = prezzoBiglietto
    document.getElementById("offerta").innerHTML = "Biglietto Standard"
    document.getElementById("prezzo-finale").innerHTML = prezzoBiglietto.toFixed(2) + "euro"
  }
  
  if(age.value == "over-65"){
    prezzoBiglietto = prezzoBiglietto * 0.6
    document.getElementById("offerta").innerHTML = "Biglietto Silver"
    document.getElementById("prezzo-finale").innerHTML = prezzoBiglietto.toFixed(2) + "euro"
  }

  if(age.value == "option"){
    alert("completa il form")
  }


  document.getElementById("ticket").style.display = "block";
  document.getElementById("name-passenger").innerHTML = personalData.value;
}
)

document.querySelector(".reset").addEventListener ("click", function(){
  console.log*
}
)
