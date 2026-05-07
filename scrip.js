/**
 * Control del comportamiento del Menú de Navegación
 * Cambia el fondo del menú al hacer scroll después de pasar el encabezado
 */

// Selecciona los elementos del DOM de manera semántica
const menu = document.querySelector("nav");
const header = document.querySelector("header");

// Verificamos que ambos elementos existan antes de añadir el evento
if (menu && header) {
    
    // Función para manejar el cambio de color
    const handleScroll = () => {
        // Obtiene la altura actual del encabezado en cada ejecución
        // Esto es útil si el usuario cambia el tamaño de la ventana
        const headerHeight = header.offsetHeight;

        if (window.scrollY > headerHeight) {
            // Fondo sólido cuando bajamos
            menu.style.backgroundColor = "rgb(5, 43, 150)"; 
        } else {
            // Fondo transparente cuando estamos arriba
            menu.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
        }
    };

    // Escucha el evento de desplazamiento del ratón
    window.addEventListener("scroll", handleScroll);
}

/**
 * Nota: El color rgb(5, 43, 150) coincide con el color 
 * que definimos para el footer en el archivo style.css
 */