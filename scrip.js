/**
 * Control del comportamiento del Menú de Navegación
 * Ajustado a la nueva paleta: Azul oscuro (#0a192f)
 */

// Seleccionamos el menú y el encabezado
const menu = document.querySelector("nav");
const header = document.querySelector("header");

// Verificamos que existan en la página actual
if (menu && header) {
    
    const handleScroll = () => {
        // Obtenemos la altura del encabezado para saber cuándo cambiar el fondo
        const headerHeight = header.offsetHeight;

        // Si el usuario baja más allá del encabezado
        if (window.scrollY > headerHeight - 50) { // El -50 da un margen para que cambie un poco antes
            // Cambia al azul marino profundo que definimos en el footer y el CSS
            menu.style.backgroundColor = "#0a192f"; 
            menu.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)"; // Añade una pequeña sombra al bajar
        } else {
            // Fondo totalmente transparente cuando está sobre el header
            menu.style.backgroundColor = "transparent"; 
            menu.style.boxShadow = "none";
        }
    };

    // Escuchamos el evento de scroll
    window.addEventListener("scroll", handleScroll);
}

/**
 * NOTA: Asegúrate de que el archivo se llame scrip.js 
 * tal como lo pusiste en el HTML, o cámbialo en ambos lados.
 */