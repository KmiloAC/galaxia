// Seleccionar el contenedor con la clase 'introduction'
const introductionContainer = document.querySelector('.introduction');

// Array con los textos de los botones
const buttonData = [
    { text: 'Antojitos Galacticos', href: 'pages/seccion1.html' },
    { text: 'Bebidas Frias', href: 'pages/seccion2.html' },
    { text: 'Bebidas Calientes', href: 'pages/seccion3.html' },
    { text: 'Cocteleria', href: 'pages/seccion4.html' },
    //{ text: 'Desayunos', href: 'pages/seccion5.html' },
    { text: 'Snacks', href: 'pages/seccion6.html' }
];

// Crear los elementos y agregarlos al contenedor
buttonData.forEach(data => {
    // Crear el div con clase 'menu-button'
    const menuButtonDiv = document.createElement('div');
    menuButtonDiv.classList.add('menu-button');

    // Crear el enlace <a> con el texto y href
    const link = document.createElement('a');
    link.classList.add('button');
    link.textContent = data.text;
    link.href = data.href;

    // Agregar el enlace <a> dentro del div 'menu-button'
    menuButtonDiv.appendChild(link);

    // Agregar el div 'menu-button' al contenedor 'introduction'
    introductionContainer.appendChild(menuButtonDiv);
});
