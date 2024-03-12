// !---> RANDOM BACKGROUND COLOR CHANGER <---! //
// todo: 1. Sélectionner le bouton dans le DOM et l'assigner à une variable
const btn = document.querySelector('#btn');



// todo: 2. Créer notre array de couleurs
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "white"]



// todo: 3. Déclarer une variable "randomIndex" dans le root pour pourvoir l'utiliser dans tout notre code
let randomIndex;



// todo: 4. Créer une fonction pour générer un nombre aléatoire qui va servir d'index pour notre array de couleurs
function generateRandomIndex() {
  randomIndex = Math.floor(Math.random() * colors.length);
}



// todo: 5. Créer une fonction pour changer la couleur de notre background
function changeBackgroundColor() {
  generateRandomIndex();
  document.body.style.backgroundColor = colors[randomIndex];
}



// todo: 6. Ajouter un event listener sur notre bouton pour changer la couleur de notre background sur un click
btn.addEventListener('click', changeBackgroundColor);




// todo (BONUS) : 7. Changer la couleur de notre background aléatoirement sur un timer
// todo: 7a. Créer une fonction pour changer la couleur de notre background et une variable pour déterminer l'état de notre fonction
let isActive = false;
let timer;

function changeBackgroundColorOnTimer() {
  timer =
    setInterval(() => {
      changeBackgroundColor();
    }, 500)

  isActive = true;
}



// todo: 7b. Modifier notre event listener pour appeler notre fonction "changeBackgroundColorInterval" sur un click
btn.addEventListener('click', () => {
  if (!isActive) {
    changeBackgroundColorOnTimer()
  } else {
    clearInterval(timer)
    isActive = false;
  }
})

