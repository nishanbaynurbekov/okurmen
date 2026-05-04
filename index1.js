const API = "https://69e59424ce4e908a155e2650.mockapi.io/Bhh/chyngyz"

const tereze = document.getElementById("tereze")
const cont1 = document.querySelector(".cont1")
const adabiat = document.getElementById("open")
const adab = document.querySelector(".adab")
const chyngyz = document.getElementById("chyngyz")

function adab_open() {
     adab.style.display = "flex"
     cont1.style.display = "none"

 async function aytmat(params) {  
    adab.style.display = "none"
    tereze.style.display = "flex"

    const res = await fetch(API)
    const data = await res.json();
    try{
    tereze.innerHTML = data.map(item =>
        ` <div class="sabr"><div class="image">
        <img src="${item.image}"></div>
        <h3>${item.name}</h3>
        <h5>${item.year}</h5>
        <p>${item.text}</p>
        <button id="ok_btn">окуу</button>
        <button id="iz_btn">тандалгандар</button></div>
    `
    ) .join(" ")

    }
    catch(error){
    console.log(error);
    
    }
    
 }

 chyngyz.onclick = aytmat

}

adabiat.onclick = adab_open

