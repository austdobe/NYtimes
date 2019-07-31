var start = document.getElementById("stYr");
var end = document.getElementById("edYr");
var searchTerms = document.getElementById("term");
var NumbRec = document.getElementById("rec");

$(document).ready(function() {
    var search = searchTerms;
    var beginDate = start;
    var endDate = end;
    var numResults = NumbRec;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key=PG2ZSczcAeGWNwUA46wQNPnsBSmGeg4W&begin_date="+beginDate+"&end_date="+endDate;
    console.log("test");
    
    $("#search").on("click", function (){
        console.log(click);
     
     
     
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
        console.log(response);
        for (i=0;i<numResults;i++) {
            var newDiv = $("<div>");
            newDiv.append("<p>Headline: <a href="+response.response.docs[i].web_url+">"+response.response.docs[i].headline.main+"</a></p>");
            newDiv.append("<p>Abstract: "+response.response.docs[i].abstract+"</p>");
            
            $("#searchResults").append(newDiv)
            console.log(response.response.docs[i].headline.main);
            console.log(response.response.docs[i].abstract);
            console.log(response.response.docs[i].web_url);
        };


    });
});
    $("clear").on("click", function(){
        console.log(click)
     });

});