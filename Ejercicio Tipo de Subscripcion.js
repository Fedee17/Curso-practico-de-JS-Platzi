
function tipoSubs(subs) {
    
    if (subs == 'Free' || subs == 'free') {
        console.log('Puedes tomar los cursos gratis');
        return;
    }

    if (subs == 'Basic' || subs == 'basic') {
        console.log('Puedes tomar los cursos basicos');
        return;
    }

    if (subs == 'Expert' || subs == 'expert') {
        console.log('Puedes tomar todos los cursos');
        return;
    }

    if (subs == 'Free' || subs == 'free') {
        console.log('Puedes tomar los cursos gratis');
        return;
    }
    
    console.warn('Ese tipo de subscripción no existe');

}