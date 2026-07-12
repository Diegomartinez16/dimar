const menuBoton = document.querySelector(".menu-boton");
const menu = document.querySelector(".menu");
const enlacesMenu = document.querySelectorAll(".menu a");

menuBoton.addEventListener("click", () => {
    const estaAbierto = menu.classList.toggle("activo");

    menuBoton.classList.toggle("activo", estaAbierto);
    menuBoton.setAttribute("aria-expanded", String(estaAbierto));
    menuBoton.setAttribute("aria-label", estaAbierto ? "Cerrar menú" : "Abrir menú");
});

enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("activo");
        menuBoton.classList.remove("activo");
        menuBoton.setAttribute("aria-expanded", "false");
        menuBoton.setAttribute("aria-label", "Abrir menú");
    });
});
