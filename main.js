document.addEventListener("DOMContentLoaded", function() {
    // Desplazamiento suave para enlaces de la barra de navegación
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidad adicional para la barra de navegación
    // Por ejemplo, cambiar el aspecto al desplazarse
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Aquí puedes agregar más funcionalidades según sea necesario
});
