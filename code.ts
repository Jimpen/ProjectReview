import * as angular from "angular";

let app = angular.module("reviewApp", []);

app.controller("reviewController", function($scope){
    $scope.message = "Hello from Angular!";
});

import {movieData} from "./data";
import * as $ from "jquery";
import { Review } from "./interfaces";

function renderMovie(movie: Review){

  document.querySelector(".review h1").textContent = movie.title;
  document.querySelector(".review p").textContent = movie.review;
  document.querySelector(".image").setAttribute("src",movie.imgUrl)

   let actorList = "";
   for(let i=0; i<movie.actors.length; i++){
       actorList += "<li>" + movie.actors[i] + "</li>";
       console.log(i);
   }

   document.querySelector(".review ul").innerHTML = actorList;
   
};


$(".stars").on("click", "span", (e) => {
    
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


