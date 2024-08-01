// Creacion de la lista de comidas

list = document.getElementById('list-eatings');
nombreComida = ['Arepas Rellenas', 'Sandwich', 'Waffles de sal', 'Antojitos Galacticos', 'Bebidas Frias', 'Bebidas Calientes', 'Desayunos', 'Cocteleria'];
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
            listaSelected(nombreArepas, imgArepas, desArepas, priceArepas, 'Arepas Rellenas', tipoProducto);
            break;
        // SANDWICH
        case 1:
            listaSelected(nombreSandwich, imgSandwich, desSandwich, priceSandwich, 'Sandwiches', tipoProducto);
            break;
        // WAFFLES DE SAL
        case 2:
            listaSelected(nombreWafflesSal, imgWafflesSal, desWafflesSal, priceWafflesSal, 'Waffles de Sal', tipoProducto);
            break;
        case 3:
            window.location.href = 'seccion1.html';
            break;
        case 4:
            window.location.href = 'seccion2.html';
            break;  
        case 5:
            window.location.href = 'seccion4.html';
            break;  
        case 6:
            window.location.href = 'seccion5.html';
            break;    
        case 7:
            window.location.href = 'seccion6.html';
            break;  
        default:
            // Puedes agregar un mensaje de error o acción por defecto aquí si es necesario
            listaSelected(nombreArepas, imgArepas, desArepas, priceArepas, 'Arepas Rellenas', tipoProducto);
            break;
    }
}

//Aquí se proporcionará la descripción de las arepas rellenas que se encuentran dentro de la heladería y toda su información relevante
// AREPAS RELLENAS
// POLLO
let nombreArepas = ['Pollo', 'Carne', 'Huevos', 'Jamón y Queso', 'Mixta', 'Galáctica Criolla'];
let imgArepas = ['../assets/Arepas/arepa1.png', '../assets/Arepas/arepa2.png', '../assets/Arepas/arepa3.png', '../assets/Arepas/arepa4.png', '../assets/Arepas/arepa5.png', '../assets/Arepas/arepa6.png'];
let desArepas = ['Jamon + Queso + Pollo + Salsas', 'Jamon + Queso + Carne + Salsas', 'Jamon + Queso + Huevos + Salsas', 'Jamon + Queso + Salsas', 'Jamon + Queso + Pollo + Carne + Salsas', 'Jamon + Queso + Plátano + Maíz Tierno + Pollo + Salsas'];
let priceArepas = ['9.000', '9.000', '7.000', '5.000', '11.000', '13000'];


//Aquí se proporcionará la descripción de los sándwiches que se encuentran dentro de la heladería y toda su información relevante
// SANDWICH
// TRADICIONAL
let nombreSandwich = ['Tradicional', 'Pollo', 'Atún'];
let imgSandwich = ['../assets/Sandwich/sandwich1.png', '../assets/Sandwich/sandwich2.png', '../assets/Sandwich/sandwich3.png'];
let desSandwich = ['Lechuga, Tomate, Jamón Ahumado, Queso y Salsa de Tomate', 'Lechuga, Tomate, Pollo, Queso y Salsa Blanca', 'Lechuga, Tomate, Cebolla, Pimentón, Atún y Salsa de Mayonesa'];
let priceSandwich = ['5.000', '10.000', '10.000'];

//Aquí se proporcionará la descripción de los waffles de sal que se encuentran dentro de la heladería y toda su información relevante
// WAFFLES DE SAL
// CRIOLLO
let nombreWafflesSal = ['Criollo', 'Huevo Ranchero', 'Carne', 'De la Casa'];
let imgWafflesSal = ['../assets/WafflesSal/waffleSal1.png', '../assets/WafflesSal/waffleSal2.png', '../assets/WafflesSal/waffleSal3.png', '../assets/WafflesSal/waffleSal4.png'];
let desWafflesSal = ['Lechuga, Maíz Tierno, Pollo, Plátano, Salsa Criolla y Queso', 'Jamón, Queso, Huevos, Salchichas, Salsa de Ajo', 'Lechuga, Plátano, Carne, Pico de Gallo, Salsa de Guacamole', 'Lechuga, Lomo de Cerdo, Vegetales Salteados y Salsa de Chile Dulce'];
let priceWafflesSal = ['17.000', '12.000', '17.000', '18.000'];



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



listaSelected(nombreArepas, imgArepas, desArepas, priceArepas, 'Arepas Rellenas', 0);