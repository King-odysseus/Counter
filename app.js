document.addEventListener('DOMContentLoaded', function() {
    // Defining elements in HTML page
   const decrease = document.querySelector('.btn-decrease');
   const increase = document.querySelector('.btn-increase');
   const reset = document.querySelector('.btn-reset');
   const countElement = document.querySelector('.count');

   let count = 0;

//update count functon
 function UpdateCount() {
    countElement.textContent = count;
 }


//  increase

increase.addEventListener('click', function (){
    count++;
   return 
    UpdateCount();
});


});


