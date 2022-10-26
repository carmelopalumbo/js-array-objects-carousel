// js

// array di oggetti
const cities = [
    {
        name: 'New York',
        people: '8,468 milioni',
        descr: 'Si trova alla foce del fiume Hudson. Manhattan, il suo cuore pulsante, è considerato uno dei poli commerciali più importanti al mondo.',
        image: 'new-york.jpg'
    },

    {
        name: 'Parigi',
        people: '2,161 milioni',
        descr: 'Capitale della Francia, è una delle città più importanti di Europa, centro mondiale di arte, moda, gastronomia e cultura.',
        image: 'parigi.jpg'
    },

    {
        name: 'Roma',
        people: '2,873 milioni',
        descr: 'Capitale dell’Italia, è una grande città cosmopolita con una storia artistica, architettonica e culturale che ha influenzato tutto il mondo e che risale a quasi 3000 anni fa.',
        image: 'roma.jpeg',
    },

    {
        name: 'Barcellona',
        people: '1,62 milioni',
        descr: 'La cosmopolita capitale della regione spagnola della Catalogna, è celebre soprattutto per arte e architettura.',
        image: 'barcellona.jpg'
    },

    {
        name: 'Berlino',
        people: '3,645 milioni',
        descr: 'La capitale della Germania, fu fondata nel XIII secolo. Il Memoriale dell Olocausto e le parti restanti del muro di Berlino, testimoniano la difficile storia della città nel corso del XX secolo.',
        image: 'berlino.jpg'
    }
]

// variabili

const sliderBig = document.querySelector('.slider-big');
const sliderThumb = document.querySelector('.thumbnails');
const descrSlider = document.querySelector('.descr-slider');
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');

//creo le thumbnails
getThumbnails();

//creo la prima immagine
createContentTop(cities[0]);



function createContentTop(cities){
    let content = '';
    
     content = `
        <div class="citta">
                <img src="assets/img/${cities.image}" alt="${cities.name}">
                <div class="descr-slider">
                    <p class="cityname">${cities.name}</p>
                    <p class="people">${cities.people}</p>
                    <p class="descr">${cities.descr}</p>
                </div>
        </div>
   `;

   sliderBig.innerHTML = content;
}


function getThumbnails(){
    let content = '';
    
    cities.forEach(city => {
        content += `<img src="assets/img/${city.image}" alt="${city.name}">`
    })

    console.log(content);
    sliderThumb.innerHTML = content;
}
