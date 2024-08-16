// Creacion de la lista de comidas

list = document.getElementById('list-eatings');
nombreComida = ['Desayunos', 'Antojitos Galacticos', 'Bebidas Frias', 'Bebidas Calientes', 'Cocteleria', 'Snacks'];
imagenes = ['../assets/lista-de-comida/image1.png', '../assets/lista-de-comida/image2.png', '../assets/lista-de-comida/image3.png', '../assets/lista-de-comida/image4.png', '../assets/lista-de-comida/image5.png','../assets/lista-de-comida/image6.png','../assets/lista-de-comida/image7.png']

for(let i=0; i<nombreComida.length; i++){
    const item = document.createElement('div');
    item.classList.add('food-item');
    item.addEventListener('click', () => mostrarProducto(i));
    list.appendChild(item);
    const img = document.createElement('img');
    img.classList.add('food-img')
    img.src = imagenes[i];
    item.appendChild(img);
    const textItem = document.createElement('div');
    textItem.classList.add('food-text');
    textItem.textContent = nombreComida[i];
    item.appendChild(textItem);
    
}

function mostrarProducto(tipoProducto){
    item = document.querySelectorAll('food-item');
    const itemSelected = item[tipoProducto];
    switch (tipoProducto) {
        // Aquí se proporcionará la descripción de los waffles que se encuentran dentro de la heladería y toda su información relevante
        case 0:
            listaSelected(nombreDesayunos, imgDesayunos, desDesayunos, priceDesayunos, 'Como en Casa', tipoProducto);
            ajustarTamanoContenedores();
            break;
        case 1:
            window.location.href = 'seccion1.html';
            break;
        case 2:
            window.location.href = 'seccion2.html';
            break;  
        case 3:
            window.location.href = 'seccion4.html';
            break;  
        case 4:
            window.location.href = 'seccion6.html';
            break;    
        case 5:
            window.location.href = 'seccion6.html';
            break;  
        default:
            // Puedes agregar un mensaje de error o acción por defecto aquí si es necesario
            listaSelected(nombreDesayunos, imgDesayunos, desDesayunos, priceDesayunos, 'Como en Casa', tipoProducto);
            break;
    }
}

//Aquí se proporcionará la descripción de los desayunos que se encuentran dentro de la heladería y toda su información relevante
// DESAYUNOS
// HUEVOS AL GUSTO
let nombreDesayunos = ['Rancheros', 'Pericos', 'Revuelto', 'Frito', 'Omelette'];
let imgDesayunos = ['../assets/Desayunos/desayuno1.png', '../assets/Desayunos/desayuno2.png', '../assets/Desayunos/desayuno3.png', '../assets/Desayunos/desayuno4.png', '../assets/Desayunos/desayuno5.png'];
let desDesayunos = ['Huevos + Tostadas o Pan + Café/Tinto/Chocolate', 'Huevos + Tostadas o Pan + Café/Tinto/Chocolate', 'Huevos + Tostadas o Pan + Café/Tinto/Chocolate', 'Huevos + Tostadas o Pan + Café/Tinto/Chocolate', 'Jamón y Queso + Fruta + Café/Tinto/Chocolate'];
let priceDesayunos = ['9.000', '9.000', '7.000', '7.000', '14.000'];


// Lista de comida en la pagina principal
// Esta funcion se encarga de crear la lista dependiendo del plato seleccionado
function listaSelected(nombre, img, description, price, titulo, n) {
    const titPrincipal = document.getElementById('title');
    titPrincipal.textContent = titulo;
    
    const contBox = document.getElementById('content-box');
    // Limpiar el contenido anterior
    contBox.innerHTML = '';

    for (let i = 0; i < nombre.length; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        contBox.appendChild(item);
        
        const imagen = document.createElement('img');
        imagen.src = img[i];
        imagen.classList.add('item-img');
        item.appendChild(imagen);
        
        const text = document.createElement('div');
        text.textContent = nombre[i];
        item.appendChild(text);
        
        const desc = document.createElement('div');
        desc.classList.add('item-description');
        desc.textContent = description[i];
        item.appendChild(desc);
        
        const value = document.createElement('div');
        value.classList.add('item-price');
        value.textContent = price[i];
        item.appendChild(value);
    }
    
    // Seleccionar todos los elementos con la clase 'item'
    const itemSelected = document.querySelectorAll('.food-item');
    
    // Suponiendo que itemSelected es una lista de elementos
    for (let i of itemSelected) {
        i.classList.remove('active');
    }

    // Activa el elemento en la posición n
    const primerItem = itemSelected[n];
    primerItem.classList.add('active');
}


listaSelected(nombreDesayunos, imgDesayunos, desDesayunos, priceDesayunos, 'Como en Casa', 0);

function ajustarTamanoContenedores() {
    // Obtener todos los elementos .item
    const items = document.querySelectorAll('.item');
    let maxHeightItem = 0;
  
    // Encuentra el alto máximo entre .item
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.height > maxHeightItem) maxHeightItem = rect.height;
    });
  
    // Ajusta el alto de todos los elementos .item
    items.forEach(item => {
      item.style.height = `${maxHeightItem}px`;
    });
  
    // Obtener todos los elementos .item-description
    const descriptions = document.querySelectorAll('.item-description');
    let maxHeightDescription = 0;
  
    // Encuentra el alto máximo entre .item-description
    descriptions.forEach(description => {
      const rect = description.getBoundingClientRect();
      if (rect.height > maxHeightDescription) maxHeightDescription = rect.height;
    });
  
    // Ajusta el alto de todos los elementos .item-description
    descriptions.forEach(description => {
      description.style.height = `${maxHeightDescription}px`;
    });
}
  
  // Llama a esta función después de que los elementos se hayan agregado al DOM
  document.addEventListener('DOMContentLoaded', ajustarTamanoContenedores);
   