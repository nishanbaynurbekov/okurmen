const API = "https://69e59424ce4e908a155e2650.mockapi.io/Bhh/chyngyz"
const content = document.querySelector(".content")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const text = document.getElementById("text")
const img = document.getElementById("img")
const salam = document.querySelector(".salam")
const creat_btn = document.getElementById("creat")

async function product() {
    const res = await fetch(API)
    const data = await res.json();

    content.innerHTML = data.map(item => `
        <div class="card"> <div class="img">
        <img src=" ${item.image}"></div>
        <h3>${item.name}</h3>
        <h5>${item.year}</h5>
        <p>${item.text}</p>
        <button onclick="deleteProduct('${item.id}')" id="delete_btn">delete</button>
        <button onclick="openModal('${item.id}')" id="update">update</button>
        </div>`),
          console.log(data);   
}
product()

async function deleteProduct(id) {
    const isDelete = confirm("өчүрүүнү каалайспы?")
     if(!isDelete) return;
     
    try{
    const res = await fetch(`${API}/${id}`, {
        method: "DELETE"
    })
    console.log(res);
    product()
    }
    catch(error) {
        console.log(error);
        
    }
}
 async function openModal(id) {
   salam.style.display = "flex"
      try{
        const res = await fetch(`${API}/${id}`)
        const data = await res.json()
        
        input1.value = data.name,
        input2.value = data.year,
        text.value = data.text,
        img.value = data.image,

        console.log(data);

        creat_btn.onclick = function(){
            updateProduct(data.id)
        }
        
      }
      catch(error){
        console.log(error);
        
      };
      
 }

 async function updateProduct(id) {
    let payload = {
        
        name: input1.value,
        year: input2.value,
        text: text.value,
        image: img.value,
    }
    try{
        const res = await fetch(`${API}/${id}`,{
            method: 'PUT',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(payload)
        })
        if (res.status == 200) {
            alert("ozgordu")
             product()

        }
    }
    catch(error){
        console.log(error);
        
    }
 }

 