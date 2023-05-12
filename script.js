// selezionare il pulsante di toggling della navbar
const navbarToggler = document.querySelector('.navbar-toggler');

// selezionare l'icona all'interno del pulsante di toggling
const navbarIcon = navbarToggler.querySelector('.fa');

// aggiungere un evento di click al pulsante di toggling
navbarToggler.addEventListener('click', function() {
  // se l'icona corrente è "fa-bars", cambiarla in "fa-times"
  if (navbarIcon.classList.contains('fa-bars')) {
    navbarIcon.classList.remove('fa-bars');
    navbarIcon.classList.add('fa-times');
  } else {  // altrimenti, se l'icona corrente è "fa-times", cambiarla in "fa-bars"
    navbarIcon.classList.remove('fa-times');
    navbarIcon.classList.add('fa-bars');
  }
});


/* ROW-GRID SWITCH ANIMATION */
function toggleView(viewMode) {
  if (viewMode === 'row') {
    // Attiva il pulsante "row" e disattiva il pulsante "grid"
    document.getElementById('row-button').classList.add('active');
    document.getElementById('grid-button').classList.remove('active');
  } else {
    // Attiva il pulsante "grid" e disattiva il pulsante "row"
    document.getElementById('grid-button').classList.add('active');
    document.getElementById('row-button').classList.remove('active');
  }
}


// CAROUSEL
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


//* Infinite scroll
// seleziono tutte le sezioni con ID che inizia con "section"
let sections = document.querySelectorAll('[id^="section"]');

// imposto la soglia a 0.5, cioè il 50% della sezione deve essere visibile
let options = {
  rootMargin: '0px',
  threshold: 0.5
}

// creo l'observer
let observer = new IntersectionObserver(function(entries, observer) {
  // per ogni sezione osservata
  entries.forEach(entry => {
    // se la sezione è interamente visibile
    if(entry.isIntersecting) {
      // imposto l'attributo "data-loaded" a "true"
      // questo serve per evitare di caricare più volte la stessa sezione
      if(entry.target.getAttribute('data-loaded') !== 'true') {
        entry.target.setAttribute('data-loaded', 'true');
        // qui inserisco il codice per caricare la sezione, ad esempio una chiamata AJAX
        console.log('Caricamento della sezione ' + entry.target.id);
      }
    }
  });
}, options);

// per ogni sezione
sections.forEach(section => {
  // imposto l'attributo "data-loaded" a "false"
  section.setAttribute('data-loaded', 'false');
  // osservo la sezione
  observer.observe(section);
});


// Current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;



//* POPUP
window.onload = function() {
  let popup = document.getElementById('popup');
  let closeButton = document.getElementById('popup-close');

  popup.style.display = "block";

  closeButton.onclick = function() {
    popup.style.display = "none";
  }
}


//* Easter egg
// Definisci il Konami code come una costante
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// Definisci un array vuoto per tenere traccia dell'input dell'utente
let userInput = [];

// Aggiungi un event listener per il keydown event
document.addEventListener('keydown', function(event) {
  // Aggiungi il tasto premuto all'array userInput
  userInput.push(event.key);
  
  // Controlla se l'utente ha inserito il Konami code
  if (userInput.length === KONAMI_CODE.length && userInput.every((value, index) => value === KONAMI_CODE[index])) {
    // Se il Konami code è stato inserito, esegui la funzione per l'Easter egg
    showEasterEgg();
  }
});

// Funzione per eseguire l'Easter egg
function showEasterEgg() {
  const easterEgg = document.getElementById('easter-egg');
      easterEgg.style.display = 'block';
  alert('Easter Egg is coming!!!');
}
