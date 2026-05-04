const kitep = document.querySelector(".fix")
const kana = document.getElementById("kana")
const kir = document.querySelector(".kir")
 
 function openUI(params) {
   kana.innerHTML = `<div class="birinchi"><h1>Бул жер келечекте китеп кана, китеп окуй турган жер болот, буюруса
   
   Менда ошол күн үчүн жан үрөп аракет кылам!...</h1></div>`
   kana.style.backgroundImage="none"
 }

 kitep.onclick = openUI

 function login(params) {
    kana.innerHTML = `<div class="kattal"><h1>Электрондук китеп канaга катталуу</h1><hr>
    <input placeholder="Атыңызды жазыңыз" required > <br>
    <input placeholder="Aтаңыздын аты (фамиляңыз)" required><br>
    <input type="date" placeholder="Жашыңыз канчада?" required><br>
    <input placeholder="электрондук почта" required><br>
    <input type="password" placeholder="сыр сөз коюңуз" required><br>
    <button id="atBtn">Катталуу</button><br>
    <a id="ateg">акаунтка кирүү</a>
    </div>`
      kana.style.backgroundImage="none"
      
 }
 kir.onclick = login