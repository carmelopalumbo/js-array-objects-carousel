// js

// array di oggetti
const cities = [
    {
        name: 'New York',
        people: '8,468 milioni abitanti',
        descr: 'Si trova alla foce del fiume Hudson. Manhattan, il suo cuore pulsante, è considerato uno dei poli commerciali più importanti al mondo.',
        image: 'new-york.jpg'
    },

    {
        name: 'Parigi',
        people: '2,161 milioni abitanti',
        descr: 'Capitale della Francia, è una delle città più importanti di Europa, centro mondiale di arte, moda, gastronomia e cultura.',
        image: 'parigi.jpg'
    },

    {
        name: 'Roma',
        people: '2,873 milioni abitanti',
        descr: 'Capitale dell’Italia, è una grande città cosmopolita con una storia artistica, architettonica e culturale che ha influenzato tutto il mondo e che risale a quasi 3000 anni fa.',
        image: 'roma.jpeg',
    },

    {
        name: 'Barcellona',
        people: '1,62 milioni abitanti',
        descr: 'La cosmopolita capitale della regione spagnola della Catalogna, è celebre soprattutto per arte e architettura.',
        image: 'barcellona.jpg'
    },

    {
        name: 'Berlino',
        people: '3,645 milioni abitanti',
        descr: 'La capitale della Germania, fu fondata nel XIII secolo. Il Memoriale dell Olocausto e le parti restanti del muro di Berlino, testimoniano la difficile storia della città nel corso del XX secolo.',
        image: 'berlino.jpg'
    }
]

// variabili
const sliderBig = document.querySelector('.slider-big');
const sliderThumb = document.querySelector('.thumbnails');
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');
let checkLoop = true;
const btnSwap = document.querySelector('.swap');
const btnStop = document.querySelector('.stop');
let counter = 0;

//creo le thumbnails
getThumbnails();

//creo le immagini
getContentTop();

//creo un array contenente le immagini grandi
const imgBig = document.getElementsByClassName('big_img');

//creo un array contenente le immagini thumb
const imgThumb = document.getElementsByClassName('thumb_img');

//aggiungo id alle thumbails
addThumbId();

//creo un array contenente le descrizioni
const descrSlider = document.getElementsByClassName('descr-slider');

//creo output default
getOutput();

//button avanti con check loop
btnNext.addEventListener('click', function(){
    nextCity(true);
});

//button indietro con check loop
btnPrev.addEventListener('click', function(){
    nextCity(false);
});

// timing function
let timingCarousel = setInterval(function(){
    nextCity(checkLoop);
}, 3000);


//bottoni inverti e stop
btnStop.addEventListener('click', function(){
    clearInterval(timingCarousel);
})

btnSwap.addEventListener('click', function(){
    if(checkLoop) checkLoop = false;
    else checkLoop = true;
    clearInterval(timingCarousel);
    timingCarousel = setInterval(function(){
        nextCity(checkLoop);
    }, 3000);
})



// funzioni
function getContentTop(){
    let content = '';
    
    cities.forEach(city => {
        content += `<img class="big_img d-none" src="assets/img/${city.image}" alt="${city.name}">
        <div class="descr-slider d-none">
        <p class="name">${city.name}</p>
        <p class="people">${city.people}</p>
        <p class="descr">${city.descr}</p>
        </div>`
    })

    //console.log(content);
    sliderBig.innerHTML = content;
}


function getThumbnails(){
    let content = '';
    
    cities.forEach(city => {
        content += `<img class="thumb_img thumb_none" src="assets/img/${city.image}" alt="${city.name}">
        `;
    })

    //console.log(content);
    sliderThumb.innerHTML = content;
}

function getOutput(){
    imgBig[counter].classList.remove('d-none');
    imgThumb[counter].classList.add('thumb_active');
    descrSlider[counter].classList.remove('d-none');
}

function nextCity(checkCounter){
    imgBig[counter].classList.add('d-none');
    imgThumb[counter].classList.remove('thumb_active');
    imgThumb[counter].classList.add('thumb_none');
    descrSlider[counter].classList.add('d-none');
    //console.log(imgBig.length);
    if(checkCounter){
        if(counter === imgBig.length - 1) counter = 0;
        else counter++;
    }
    else{
        if(counter === 0) counter = imgBig.length - 1;
        else counter--;
    }

    getOutput();
}

function addThumbId(){
    for(let i = 0; i < imgThumb.length; i++){
         imgThumb[i].idThumb = i;
    }
}
