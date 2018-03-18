$(document).ready(function() {
    $("#my_audio").get(0).play();
});
// puts buttons on the page
var topics = ["sculpture", "deep sea adventure","Vaporwave", "rotating heads", "satellites", "weird planets", "space", "virtual mountains", "Toxic rivers", "Log cabins", "vistas", "Modern Sprawl", "musicians", "trees", "Lisa Frank", "trapperKeepers","desert", "Trashed Planet", "Yachts", "snakes", "purple", "orange"];
for (var i = 0; i < topics.length; i++) {
    var buttons = $('<button>' + topics[i] + '</button>')
    buttons.appendTo('#topicButtons');
}
//  testing if button works
$('body').on('click','button', function (event) {
    event.preventDefault();
    // console.log("clicked");
    // console.log("testing this on click");
    // console.log(this);
    // console.log($(this));
    // console.log(i);
    // console.log($(this).text());
    // making queryURL
    var x = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tHOLbMEpoZotMdSEdo9ahhcDpO30eBcb&q=" + x + "&limit=10&offset=0&rating=PG-13&lang=en";
    // AJAX call
    $.ajax({ url: queryURL, method: 'GET' })
        .then(function (response) {
            console.log(response);
            console.log(queryURL);
            var results = response.data;
            console.log(response.data);

            for (var i = 0; i < results.length; i++) {
                var topicsDiv = $('<div>');
                var p = $('<p>').text("Rating: " + results[i].rating);
               console.log(results[i].rating);
                var topicsImage = $("<img>");
                topicsImage.attr("src", results[i].images.fixed_height.url);

                topicsDiv.append(p);
                topicsDiv.append(topicsImage);

                $("#topicsHome").prepend(topicsDiv);

                
                
            }
           
        });
})

$("#add-topic").on("click", function(event) {
    event.preventDefault();

    var userTopic= $("#topic-input").val().trim();

    // topics.push(userTopic);
    var buttons = $('<button>' + userTopic + '</button>');
    buttons.appendTo('#topicButtons');



  });

 $(document).on("click", ".gif", function(event) {
    event.preventDefault();
   var state = $(this).attr("data-state");
      console.log($(this));
                         
            //   if (state === "still") {
            //                        $(this).attr("src", $(this).attr("data-animate"));
            //       $(this).attr("data-state", "animate");
            //     } else {
            //      $(this).attr("src", $(this).attr("data-still"));
            //     $(this).attr("data-state", "still");
                });