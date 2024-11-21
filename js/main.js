document.addEventListener('DOMContentLoaded', function(){
    // Se inicializa la libreria de animaciones AOS
    AOS.init()

    // Imagenes experiencia
    const tarjetasExperiencia = document.querySelectorAll('#experience .experience-card')
    
    tarjetasExperiencia.forEach(tarjeta =>
        
        tarjeta.addEventListener('mouseenter', function(){
            // Obtenemos el ID de cada imagen
            const imagenId = tarjeta.querySelector('h5').innerText.toLocaleLowerCase()
            const imagenes = document.querySelectorAll('#experience img')

            // Quitamos la clase enabled a todas las imagenes
            imagenes.forEach(imagen =>
                imagen.classList.remove('enabled')
            )

            const imagenSeleccionada = document.getElementById(imagenId)
            imagenSeleccionada.classList.add('enabled')
        })
    )

})
