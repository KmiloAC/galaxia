// Creacion de la lista de comidas

list = document.getElementById('list-eatings');
nombreComida = ['Waffles','Ensalada de frutas','Obleas','Brownies','Bebidas','a','b'];
imagenes = ['../assets/lista-de-comida/image1.png', '../assets/lista-de-comida/image2.png', '../assets/lista-de-comida/image3.png', '../assets/lista-de-comida/image4.png', '../assets/lista-de-comida/image5.png','../assets/lista-de-comida/image6.png','../assets/lista-de-comida/image7.png']

for(let i=0; i<7; i++){
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
    switch(tipoProducto){
        case 0:
            listaSelected(nombreWaffles, imgWaffles, desWaffles, priceWaffles, 'Estrellas', tipoProducto);
            break;
        case 1:
            listaSelected(nombreEnsalada, imgEnsalada, desEnsalada, priceEnsalada, 'Cometas', tipoProducto);
            break;
        case 2: 
            listaSelected(nombreObleas, imgObleas, desObleas, priceObleas, 'Solares', tipoProducto);
            break;
        case 3:
            listaSelected(nombreBrownies, imgBrownies, desBrownies, priceBrownies, 'Cosmicos', tipoProducto);
            break;
        case 4:
            window.location.href = 'bebidas.html';
            break;
        case 5:
            break;
        case 6: 
            break;   
    }
}

//Aquí se proporcionara la descripcion de los waffles que se encuentran dentro de la heladeria y toda su informacion relevante
let nombreWaffles = ['Small', 'Big'];
let imgWaffles = ['../assets/Waffles/waffle1.png', '../assets/Waffles/waffle2.png'];
let desWaffles = ['Waffle + Helado + 3 Toppings + Salsa', 'Waffle + Helado + 5 Toppings + Salsa'];
let priceWaffles = ['14500', '16000']

//A CONTINUACION SE HACE EXACTAMENTE LO MISMO PARA CADA UNA DE LAS CATEGORIAS NECESARIAS
// Ensaladas de frutas
let nombreEnsalada = ['Especial', 'Superespecial'];
let imgEnsalada = ['../assets/Waffles/waffle1.png', '../assets/Waffles/waffle2.png'];
let desEnsalada = ['', ''];
let priceEnsalada = ['11000', '14000'];

//Obleas
let nombreObleas = ['Sencilla', 'Small con helado', 'Big con helado'];
let imgObleas = ['../assets/Waffles/waffle1.png', '../assets/Waffles/waffle2.png'];
let desObleas = ['AREQUIPE + QUESO + SALSAS', 'AREQUIPE + QUESO + 2 TOPPINGS + HELADO + SALSAS', 'AREQUIPE + QUESO + 3 TOPPINGS + HELADO + SALSAS'];
let priceObleas = ['10000', '12000', '14000'];

//Brownies
let nombreBrownies = ['Sencillo', 'Especial'];
let imgBrownies = ['../assets/Waffles/waffle1.png', '../assets/Waffles/waffle2.png'];
let desBrownies = ['BROWNIE + HELADO + 2 TOPPINGS + SALSA', 'BROWNIE + HELADO + 3 TOPPINGS + SALSA'];
let priceBrownies = ['8500', '10000'];



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
    
    // Asegúrate de seleccionar los nuevos elementos con la clase 'item'
    const itemSelected = document.querySelectorAll('.item');
    for (let i of itemSelected) {
        i.classList.remove('active');
    }
    if (itemSelected[n]) {  // Asegúrate de que el índice n es válido
        itemSelected[n].classList.add('active');
    }
}


listaSelected(nombreWaffles, imgWaffles, desWaffles, priceWaffles, 'Estrellas', 0);


