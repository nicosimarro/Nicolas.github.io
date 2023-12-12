document.addEventListener('DOMContentLoaded', function () {
    // Cambiar el color de fondo del encabezado al hacer clic en la foto
    document.getElementById('profile-picture').addEventListener('click', function () {
        document.querySelector('header').classList.toggle('header-clicked');
    });

    // Mostrar/ocultar secciones al hacer clic en los botones
    document.getElementById('habilidades').addEventListener('click', function () {
        toggleSection('habilidades');
    });

    document.getElementById('experiencia').addEventListener('click', function () {
        toggleSection('experiencia');
    });

    document.getElementById('educacion').addEventListener('click', function () {
        toggleSection('educacion');
    });

    document.getElementById('proyectos').addEventListener('click', function () {
        toggleSection('proyectos');
    });

    document.getElementById('certificaciones').addEventListener('click', function () {
        toggleSection('certificaciones');
    });

    document.getElementById('idiomas').addEventListener('click', function () {
        toggleSection('idiomas');
    });

    // Función para mostrar/ocultar secciones
    function toggleSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
    }
});
