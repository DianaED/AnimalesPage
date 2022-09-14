/**Funcion que se llama si mimsa */
(function(){
/**tres puntos para pasar de un nodo a un array */
    const sliders = [...document.querySelectorAll('.testimony__body')] ;

    const buttonNext= document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;

/**Agrega eventos a los botones */
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    })

    /**Funcion de de cambiar posicion */
    const changePosition = (add)=>{
        /**variable con  el valor actual del slider */
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;

        /**value obtiene el valor actual  */
        value =  Number(currentTestimony);
        value += add

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if (value === sliders.length+1 || value === 0){
            /** value va a cambiar, si value es igual a 0, va a tener el valor final del slider, y en caso contrario, me devuelve al numer0  1*/
            value = value === 0 ? sliders.length : 1

        }
        sliders[value -1].classList.add('testimony__body--show');
        
    }
    
})();