//Theme Toggle Script

const themeBtn = document.getElementById("themeBtn");
const dark = '<img src="assets/dark.svg" alt="moon icon">';
const light = '<img src="assets/light.svg" alt="sun icon">';




// add event listener to the button to change the theme

themeBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme"); 

  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    themeBtn.innerHTML = dark;
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeBtn.innerHTML = light;
  }
});

//add extra effect to the h1 element on scroll

window.addEventListener('scroll', () => {

  const parallaxtit = document.getElementById("paralaxtit");
  const sobremi = document.getElementById("sobremi");
  const misproyectos = document.getElementById("misproyectos");
  const tarjetas = document.querySelectorAll(".card");

  console.log(tarjetas);
  
  const prensentar = document.querySelector(".presentarme p");
  const miimg = document.getElementById("pic");


  if (window.scrollY >= 5 && window.scrollY <= 700) {
    parallaxtit.classList.add('shrink');

    sobremi.style.visibility = "visible";
    sobremi.classList.remove("shrink");
    
    prensentar.style.visibility = "visible";
    prensentar.classList.remove("shrink");

    miimg.style.visibility = "visible";
    miimg.classList.remove("shrink");

    misproyectos.classList.add("shrink");

    for (let i = 0; i < tarjetas.length; i++) {
     
      tarjetas[i].classList.add("shrink");
    };
    

  }
  else {
    parallaxtit.classList.remove("shrink");

    sobremi.classList.add("shrink");
    misproyectos.style.visibility = "visible";
    misproyectos.classList.remove("shrink");
    prensentar.classList.add("shrink");
    miimg.classList.add("shrink");

    for (let i = 0; i < tarjetas.length; i++) {
      tarjetas[i].classList.remove("shrink");
      tarjetas[i].style.visibility = "visible";
    };
  }
});


// 4. LÓGICA DEL BOTÓN VOLVER ARRRIBA
// ==========================================
const botonArriba = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    // Si el usuario ha bajado más de 300 píxeles...
    if (window.scrollY > 300) {
        // Le ponemos la clase que lo hace visible
        botonArriba.classList.add('visible');
    } else {
        // Si vuelve arriba, se la quitamos para ocultarlo
        botonArriba.classList.remove('visible');
    }
});
// Al hacer clic en el botón...
botonArriba.addEventListener('click', () => {
    // La función nativa window.scrollTo mueve la pantalla
    window.scrollTo({
        top: 0,          // Coordenada vertical 0 (arriba del todo)
        behavior: 'smooth' // Hace que el movimiento sea animado y suave
    });
});

//hamburger menu
const tnav = document.getElementById("nav-links");
const tburger = document.getElementById("hamburger");

tburger.addEventListener("click", () => {
  // Toggle Nav
  tnav.classList.toggle("active");

  // Toggle Burger Animation
  tburger.classList.toggle("toggle");
});
