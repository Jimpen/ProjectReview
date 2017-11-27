function renderMovie(movie){
  document.querySelector(".review h1").textContent = movie.title;
  document.querySelector(".review p").textContent = movie.reviewtext;
  document.querySelector(".image").setAttribute("src",movie.imgUrl)

   let actorList = "";
    
   for(let i=0; i<movie.actor.length; i++){
       actorList += "<li>" + movie.actor[i] + "</li>";
       console.log(i);
   }
            
   document.querySelector(".review ul").innerHTML = actorList;
   
};


$(".stars").on("click", "span", function(e){
    
      let star = $(e.target);
    
      let grade = parseInt(star.attr("data-rating-id"));
    
      changeStarRating(grade);

    });



function changeStarRating(grade){
    $(".filled").removeClass("filled");
    for (let i=1; i<=grade;i++){
        $("[data-rating-id=" + i + "]").addClass("filled");
    }
}    





renderMovie(movieData);


