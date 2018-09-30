
// Whenever someone clicks a p tag
$(document).on("click", "#scrape", function() {
  // Save the id from the p tag
  var thisId = $(this).attr("data-id");

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/scrape"
  }).then(function(data) {console.log(data)});
});