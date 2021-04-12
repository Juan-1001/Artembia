Swal.fire({
    title: '<h2 style="color: white;">¡Bienvenido!</h2>',
    html:'<p style="color: whitesmoke;" colo>Disfruta el contenido de nuestros artistas</p>',
    icon: 'success', 
    confirmButtonText: 'Continuar',
    footer: '<p style="color: whitesmoke; text-align: center;">Hay muchos artistas por conocer y apoyar <br><br>Crea y comparte con nosotros</p>',
    width: '70%',
    // padding: '50px',
    background: '#000',
    timer: 8000,
    // timerProgressBar: true,
    allowOutsideClick: true,
    allowScapeKey: true,

    customClass: {
      popup: 'alert',
    },

    confirmButtonColor: 'var(--colorazul)',

    // imageUrl: 'images/logo.png',


  });
//  succes, warning, question, info