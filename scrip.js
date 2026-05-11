// Esperamos a que el DOM (la estructura HTML) esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. EFECTO DE SCROLL SUAVE (SMOOTH SCROLL)
    // Seleccionamos todos los enlaces que apuntan a un ID interno (empiezan con #)
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Evitamos el salto brusco por defecto
            e.preventDefault();
            
            // Obtenemos el elemento destino mediante su ID
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Desplazamiento animado nativo del navegador
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. ANIMACIÓN DE ENTRADA (FADE-IN) PARA LAS SECCIONES
    // Configuramos un observador para detectar cuando las secciones aparecen en pantalla
    const observerOptions = {
        threshold: 0.1 // Se activa cuando el 10% de la sección es visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aplicamos una transición de opacidad
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Una vez animado, dejamos de observar ese elemento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionamos secciones y artículos para aplicarles el efecto
    const animatedElements = document.querySelectorAll('section, article');
    
    animatedElements.forEach(el => {
        // Estado inicial: invisible y un poco desplazado hacia abajo
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        // Empezamos a observar
        fadeInObserver.observe(el);
    });

    // 3. LOG DE ARQUITECTURA (OPCIONAL)
    // Útil para verificar que el script cargó correctamente en la consola
    console.log("Módulo de interactividad cargado: Capa de Presentación lista.");
});
