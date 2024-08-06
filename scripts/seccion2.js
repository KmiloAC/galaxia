// Creacion de la lista de comidas

list = document.getElementById('list-eatings');
nombreComida = ['Bubblea Tea','Frappes','Limonadas','Raspados','Malteadas','Salpicon','Jugos Naturales', 'Otras bebidas', 'Antojitos Galacticos', 'Bebidas Calientes', 'Cocteleria', 'Desayunos', 'Snacks'];
imagenes = ['../assets/lista-de-comida/image1.png', '../assets/seccion2/02frappes/frapuccinos.png', '../assets/lista-de-comida/image3.png', '../assets/lista-de-comida/image4.png', '../assets/lista-de-comida/image5.png','../assets/lista-de-comida/image6.png','../assets/lista-de-comida/image7.png']

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
            listaSelected(nombreBubbleaTea, imgBubbleaTea, desBubbleaTea, priceBubbleaTea, 'Jupiter', tipoProducto);
            break;
        case 1:
            listaSelected(nombreFrappes, imgFrappes, desFrappes, priceFrappes, 'Saturnos', tipoProducto);
            break;
        case 2:
            listaSelected(nombreLimonadas, imgLimonadas, desLimonadas, priceLimonadas, 'Estelares', tipoProducto);
            break;
        case 3:
            listaSelected(nombreRaspados, imgRaspados, desRaspados, priceRaspados, 'Mercurios', tipoProducto);
            break;
        case 4:
            listaSelected(nombreMalteadas, imgMalteadas, desMalteadas, priceMalteadas, 'Galacticas', tipoProducto);
            break;
        case 5:
            listaSelected(nombreSalpicon, imgSalpicon, desSalpicon, priceSalpicon, 'Salpicón', tipoProducto);
            break;
        case 6:
            listaSelected(nombreJugosNaturales, imgJugosNaturales, desJugosNaturales, priceJugosNaturales, 'Jugos Naturales', tipoProducto);
            break;
        case 7:
            listaSelected(nombreOtrosJugos, imgOtrosJugos, desOtrosJugos, priceOtrosJugos, 'Otras bebidas', tipoProducto);
            break;
        case 8:
            window.location.href = 'seccion1.html';
            break;
        case 9:
            window.location.href = 'seccion3.html';
            break;  
        case 10:
            window.location.href = 'seccion4.html';
            break;  
        case 11:
            window.location.href = 'seccion5.html';
            break;    
        case 12:
            window.location.href = 'seccion6.html';
            break;  
        default:
            // Puedes agregar un mensaje de error o acción por defecto aquí si es necesario
            listaSelected(nombreBubbleaTea, imgBubbleaTea, desBubbleaTea, priceBubbleaTea, 'Bubblea Tea', tipoProducto);
            break;
    }
}

//Aquí se proporcionara la descripcion de los waffles que se encuentran dentro de la heladeria y toda su informacion relevante
// BUBBLEA TEA
// JUPITER
let nombreBubbleaTea = ['Mocca Café', 'Té Chay'];
let imgBubbleaTea = ['../assets/BubbleaTea/bubblea1.png', '../assets/BubbleaTea/bubblea2.png'];
let desBubbleaTea = ['Perlas Explosivas + Chantilli', 'Perlas Explosivas + Chantilli'];
let priceBubbleaTea = ['11.000', '11.000'];

//A CONTINUACION SE HACE EXACTAMENTE LO MISMO PARA CADA UNA DE LAS CATEGORIAS NECESARIAS
// FRAPPES
// SATURNOS
let nombreFrappes = ['Frappes'];
let imgFrappes = ['../assets/seccion2/02frappes/frapuccinos.png'];
let desFrappes = [''];
let priceFrappes = ['10.000'];

// LIMONADAS
// ESTELARES
let nombreLimonadas = ['Natural', 'Coco', 'Hierba Buena', 'Cerezada'];
let imgLimonadas = ['../assets/Limonadas/limonada1.png', '../assets/Limonadas/limonada2.png', '../assets/Limonadas/limonada3.png', '../assets/Limonadas/limonada4.png'];
let desLimonadas = ['Natural', 'Coco', 'Hierba Buena', 'Cerezada'];
let priceLimonadas = ['4.500', '6.500', '6.500', '6.500'];

// RASPADOS
// MERCURIOS
let nombreRaspados = ['Sencillo', 'Especial de Frutas', 'De la Casa'];
let imgRaspados = ['../assets/Raspados/raspado1.png', '../assets/Raspados/raspado2.png', '../assets/Raspados/raspado3.png'];
let desRaspados = ['2 Sabores + Lechera', '2 Sabores + 1 Topping + Lechera', '3 Sabores + 1 Topping + Helado + Lechera'];
let priceRaspados = ['5.000', '6.500', '8.000'];

// MALTEADAS
// GALACTICAS
let nombreMalteadas = ['Sencilla', 'Especial'];
let imgMalteadas = ['../assets/Malteadas/malteada1.png', '../assets/Malteadas/malteada2.png'];
let desMalteadas = ['Frutos Rojos / Vainilla / Arequipe / Blue Berry / Oreo / Cocosette / Chocolate', 'Frutos Rojos / Vainilla / Arequipe / Blue Berry / Oreo / Cocosette / Chocolate'];
let priceMalteadas = ['8.000', '13.000'];


// SALPICÓN
let nombreSalpicon = ['Small', 'Big'];
let imgSalpicon = ['../assets/Salpicon/salpicon1.png', '../assets/Salpicon/salpicon2.png'];
let desSalpicon = ['Salpicón Small', 'Salpicón Big'];
let priceSalpicon = ['3.000', '8.000'];

// JUGOS NATURALES
let nombreJugosNaturales = ['En Agua', 'En Leche', 'De Naranja 10 OZ', 'De Naranja 16 OZ'];
let imgJugosNaturales = ['../assets/JugosNaturales/jugo1.png', '../assets/JugosNaturales/jugo2.png', '../assets/JugosNaturales/jugo3.png', '../assets/JugosNaturales/jugo4.png'];
let desJugosNaturales = ['En Agua', 'En Leche', 'De Naranja 10 OZ', 'De Naranja 16 OZ'];
let priceJugosNaturales = ['5.000', '7.000', '2.500', '3.500'];

// OTROS JUGOS
let nombreOtrosJugos = ['Granizado de Café', 'Lulada', 'Ginger con Limón'];
let imgOtrosJugos = ['../assets/OtrosJugos/jugo1.png', '../assets/OtrosJugos/jugo2.png', '../assets/OtrosJugos/jugo3.png'];
let desOtrosJugos = ['Granizado de Café', 'Lulada', 'Ginger con Limón'];
let priceOtrosJugos = ['9.000', '8.000', '4.500'];



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



listaSelected(nombreBubbleaTea, imgBubbleaTea, desBubbleaTea, priceBubbleaTea, 'Jupiter', 0);