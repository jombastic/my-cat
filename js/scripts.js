$(document).ready(function() {
  $("#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});
