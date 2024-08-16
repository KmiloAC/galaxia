// Creacion de la lista de comidas

list = document.getElementById('list-eatings');
nombreComida = ['Bebidas Calientes', 'Antojitos Galacticos', 'Bebidas Frias', 'Cocteleria'/*, 'Desayunos'*/, 'Snacks'];
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
            listaSelected(nombreBebidasCalientes, imgBebidasCalientes, desBebidasCalientes, priceBebidasCalientes, 'Asteroides', tipoProducto);
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
            listaSelected(nombreBebidasCalientes, imgBebidasCalientes, desBebidasCalientes, priceBebidasCalientes, 'Asteroides', tipoProducto);
            break;
    }
}

//Aquí se proporcionara la descripcion de las bebidas calientes que se encuentran dentro de la heladeria y toda su informacion relevante
// BEBIDAS CALIENTES
// ASTEROIDES
let nombreBebidasCalientes = ['Tinto', 'Café en Leche', 'Capuccino', 'Chocolate', 'Aromáticas', 'Aromática con Frutas', 'Tinto Expresso', 'Té Negro'];
let imgBebidasCalientes = ['../assets/BebidasCalientes/bebida1.png', '../assets/BebidasCalientes/bebida2.png', '../assets/BebidasCalientes/bebida3.png', '../assets/BebidasCalientes/bebida4.png', '../assets/BebidasCalientes/bebida5.png', '../assets/BebidasCalientes/bebida6.png', '../assets/BebidasCalientes/bebida7.png', '../assets/BebidasCalientes/bebida8.png'];
let desBebidasCalientes = ['Tinto', 'Café en Leche', 'Capuccino', 'Chocolate', 'Aromáticas', 'Aromática con Frutas', 'Tinto Expresso', 'Té Negro'];
let priceBebidasCalientes = ['1.800', '2.000', '4.800', '3.500', '1.800', '4.800', '1.500', '4.800'];





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



listaSelected(nombreBebidasCalientes, imgBebidasCalientes, desBebidasCalientes, priceBebidasCalientes, 'Asteroides', 0);

function ajustarTamanoContenedores() {
    const items = document.querySelectorAll('.item');
    let maxHeight = 0;
  
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.height > maxHeight) maxHeight = rect.height;
    });
  
    items.forEach(item => {
      item.style.height = `${maxHeight}px`;
    });
  }
  
  // Llama a esta función después de que los elementos se hayan agregado al DOM
  document.addEventListener('DOMContentLoaded', ajustarTamanoContenedores);
   