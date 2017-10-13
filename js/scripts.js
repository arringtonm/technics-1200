$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#stay-in-touch").hide();
    $(".thank-you").fadeIn();
  });
});
