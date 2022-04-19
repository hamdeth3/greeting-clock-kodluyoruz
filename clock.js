let promptValue = prompt("isminizi giriniz","isim")

document.querySelector("#myName").innerHTML = promptValue()


  let myclockElement = document.querySelector("#myClock");
  let currentDateTime = new Date().toLocaleString();
  myclockElement.innerHTML = currentDateTime;
  