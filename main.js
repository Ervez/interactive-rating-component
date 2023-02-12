$(function(){
    const ratingButtons = [...$(".ratingButton")];
    ratingButtons.forEach(button =>{
        button.addEventListener('click', raingClicked);
    })

    function raingClicked(event){
        $('.ratingButton').attr('class', 'ratingButton');
        let currentRatingSelected = event.target;
        $(currentRatingSelected).addClass('ratingButtonSelected');
    }
})