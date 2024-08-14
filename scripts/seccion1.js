// Creacion de la lista de comidas

list = document.getElementById('list-eatings');
nombreComida = ['Helado de Yogurt','Parfaits','Sundae','Obleas','Waffles','Merengones','Brownies', 'Ensaladas de frutas', 'Postres', 'Bebidas Frias', 'Bebidas Calientes', 'Cocteleria'/*, 'Desayunos'*/, 'Snacks'];
imagenes = ['../assets/seccion2/02frappes/frapuccinos.png', '../assets/seccion1/02parfaits/small.png', '../assets/seccion1/03sundae/sencillo.png', '../assets/seccion1/04obleas/big.png', '../assets/seccion1/05waffles/big.png','../assets/seccion1/06merengones/big.png','../assets/seccion1/07brownies/sencillo.png', '../assets/seccion1/08ensaladas/super-especial.png', '../assets/seccion1/09postres/cuajada.png', '../assets/seccion2/02frappes/frapuccinos.png', '../assets/seccion2/02frappes/frapuccinos.png', '../assets/seccion2/02frappes/frapuccinos.png', '../assets/seccion2/02frappes/frapuccinos.png', '../assets/seccion2/02frappes/frapuccinos.png']

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
        case 0:
            listaSelected(nombreHelado, imgHelado, desHelado, priceHelado, 'Nebulosos', tipoProducto);
            break;
        case 1:
            listaSelected(nombreParfaits, imgParfaits, desParfaits, priceParfaits, 'Marte', tipoProducto);
            break;
        case 2:
            listaSelected(nombreSundae, imgSundae, desSundae, priceSundae, 'Luna', tipoProducto);
            break;
        case 3:
            listaSelected(nombreObleas, imgObleas, desObleas, priceObleas, 'Solares', tipoProducto);
            break;
        case 4:
            listaSelected(nombreWaffles, imgWaffles, desWaffles, priceWaffles, 'Estrellas', tipoProducto);
            break;
        case 5:
            listaSelected(nombreMerengones, imgMerengones, desMerengones, priceMerengones, 'Universos', tipoProducto);
            break;
        case 6:
            listaSelected(nombreBrownies, imgBrownies, desBrownies, priceBrownies, 'Cósmicos', tipoProducto);
            break;
        case 7:
            listaSelected(nombreEnsalada, imgEnsalada, desEnsalada, priceEnsalada, 'Cometas', tipoProducto);
            break;
        case 8:
            listaSelected(nombrePostre, imgPostre, desPostre, pricePostre, 'Postres', tipoProducto);
            break;
        case 9:
            window.location.href = 'seccion2.html';
            break;
        case 10:
            window.location.href = 'seccion3.html';
            break;  
        case 11:
            window.location.href = 'seccion4.html';
            break;  
        case 12:
            window.location.href = 'seccion6.html';
            break;    
        case 13:
            window.location.href = 'seccion6.html';
            break;  
            default:
            listaSelected(nombreHelado, imgHelado, desHelado, priceHelado, 'Helados de Yogurt', tipoProducto);
            break;
    }
    
}

//Aquí se proporcionara la descripcion de los helados de yogurt que se encuentran dentro de la heladeria y toda su informacion relevante
let nombreHelado = ['Small', 'Medium', 'Big', 'Big Max'];
let imgHelado = ['../assets/seccion2/02frappes/frapuccinos.png', '../assets/seccion2/02frappes/frapuccinos.png', '../assets/seccion2/02frappes/frapuccinos.png', '../assets/seccion2/02frappes/frapuccinos.png'];
let desHelado = ['(Helado + 1 Topping + Salsa', 'Helado + 2 Toppings + Salsa', 'Helado + 3 Toppings + Salsa', 'Helado + 4 Toppings + Salsa'];
let priceHelado = ['5.000', '6.500', '8.000', '10.000']

//A CONTINUACION SE HACE EXACTAMENTE LO MISMO PARA CADA UNA DE LAS CATEGORIAS NECESARIAS
// PARFAITS
// MARTE
let nombreParfaits = ['Small', 'Big'];
let imgParfaits = ['../assets/seccion1/02parfaits/small.png', '../assets/seccion1/02parfaits/small.png'];
let desParfaits = ['(2 frutas + Granola + Helado)', '(4 frutas + Granola + Helado)'];
let priceParfaits = ['8.000', '11.000'];

// SUNDAE
// LUNA
let nombreSundae = ['Sencillo', 'Especial'];
let imgSundae = ['../assets/seccion1/03sundae/sencillo.png', '../assets/seccion1/03sundae/sencillo.png'];
let desSundae = ['(Con Salsas)', '(Con Frutas)'];
let priceSundae = ['7.000', '9.000'];


// OBLEAS
// SOLARES
let nombreObleas = ['Sencilla', 'Small con Helado', 'Big con Helado'];
let imgObleas = ['../assets/seccion1/04obleas/big.png', '../assets/seccion1/04obleas/big.png', '../assets/seccion1/04obleas/big.png'];
let desObleas = ['(Arequipe + Queso + Salsas)', '(Arequipe + Queso + 2 Toppings + Helado + Salsas)', '(Arequipe + Queso + 2 Toppings + Helado + Salsas)'];
let priceObleas = ['4.000', '10.000', '12.000'];

// WAFFLES
// ESTRELAS
let nombreWaffles = ['Small', 'Big'];
let imgWaffles = ['../assets/seccion1/05waffles/big.png', '../assets/seccion1/05waffles/big.png'];
let desWaffles = ['(Waffle + Helado + 3 Toppings + Salsas)', '(Waffle + Helado + 5 Toppings + Salsas)'];
let priceWaffles = ['14.000', '16.500'];

// MERENGONES
// UNIVERSOS
let nombreMerengones = ['Small', 'Medium', 'Big'];
let imgMerengones = ['../assets/seccion1/06merengones/big.png', '../assets/seccion1/06merengones/big.png', '../assets/seccion1/06merengones/big.png'];
let desMerengones = ['(Merengón + Helado + 1 Topping)', '(Merengón + Helado + 2 Toppings)', '(Merengón + Helado + 4 Toppings)'];
let priceMerengones = ['6.500', '12.000', '16.000'];

// BROWNIES
// COSMICOS
let nombreBrownies = ['Sencillo', 'Especial'];
let imgBrownies = ['../assets/seccion1/07brownies/sencillo.png', '../assets/seccion1/07brownies/sencillo.png'];
let desBrownies = ['(Brownie + Helado + 2 Toppings + Salsa)', '(Brownie + Helado + 3 Toppings + Salsas)'];
let priceBrownies = ['8.500', '11.000'];

// ENSALADA DE FRUTAS
// COMETAS
let nombreEnsalada = ['Especial', 'Super Especial'];
let imgEnsalada = ['../assets/seccion1/08ensaladas/especial.png', '../assets/seccion1/08ensaladas/super-especial.png'];
let desEnsalada = ['', ''];
let priceEnsalada = ['11.000', '14.000'];

// POSTRE
// POSTRE DE CUAJADA
let nombrePostre = ['Cuajada con Dulce de Mora', 'Mantecada con Helado'];
let imgPostre = ['../assets/seccion1/09postres/cuajada.png', '../assets/seccion1/07brownies/sencillo.png'];
let desPostre = ['Cuajada con dulce', 'Mantecada con helado'];
let pricePostre = ['5.000', '5.000', '5.000', '6.500'];



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
        
        const text = document.createElement('div');
        text.textContent = nombre[i];
        text.classList.add('item-text');
        item.appendChild(text);

        const imagen = document.createElement('img');
        imagen.src = img[i];
        imagen.classList.add('item-img');
        item.appendChild(imagen);
        
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



listaSelected(nombreHelado, imgHelado, desHelado, priceHelado, 'Nebulosos', 0);