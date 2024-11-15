import { data_region } from "./data.js";

// GERANDO LISTA DE REGIÕES
function regionGenerator(array) {
    let list = window.document.getElementById("lista_de_lugares");
    
    for (let x = 0; x < array.length; x++) {

        let item = document.createElement("li");
        item.style.backgroundImage = `url("${randomImage(array,x)}")`;

        let containerText = document.createElement("div");
        let name_region = document.createElement("h3");
        let small_text = document.createElement("p"); 

        containerText.id = "container_text_preview";
        name_region.innerText = array[x].name;
        small_text.innerHTML = array[x].small_text;

        containerText.appendChild(name_region);
        containerText.appendChild(small_text);
        item.appendChild(containerText);
        list.appendChild(item);
    }
}

// FUNÇÃO PARA IMAGENS RANDOMICAMENTE

const randomImage = (list, item) => {
     let random = Math.floor(Math.random() * 2);

     if (random == 1) {
        return list[item].image1;
     } else {
        return list[item].image2;
     }
}

regionGenerator(data_region);b