$(function(){
    const ratingButtons = [...$(".ratingButton")];
    let isRatingClicked = false;
    ratingButtons.forEach(button =>{
        button.addEventListener('click', raingClicked);
    })

    function raingClicked(event){
        $('.ratingButton').attr('class', 'ratingButton');
        let currentRatingSelected = event.target;
        $(currentRatingSelected).addClass('ratingButtonSelected');
        isRatingClicked = true;
    }

    $( ".submitButton" ).click(function() {
        if(isRatingClicked == false){
            shakeElement(this);
        }else{
            $('.containerMain').fadeOut();
            setTimeout(() => {
                $('.containerThankState').fadeIn();
              }, 500)
        }
      });


      function shakeElement(element){
        $(element).addClass('shake');
        setTimeout(function(){
            $(element).removeClass('shake');
        },1000);
    };
})