document.addEventListener('DOMContentLoaded' , function(){

    const increase = document.querySelector('.btn-increase');
    const decrease = document.querySelector('.btn-decrease');
    const reset = document.querySelector('.btn-reset');
    const countElement = document.querySelector('.count');

    
    let count = 0

    function UpdateCount(){
        countElement.textContent = count
    }

// increase

increase.addEventListener( 'click' , function(){
    count++;
    UpdateCount();
});
decrease.addEventListener( 'click' , function(){
    count--;
    UpdateCount();
});
reset.addEventListener( 'click' , function(){
    count = 0;
    UpdateCount();
});




});