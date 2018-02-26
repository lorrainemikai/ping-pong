//business logic
var pingy = [];

function pingPong(number) {
  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
      pingy.push("pingpong");
    } else if (index % 5 === 0) {
      pingy.push("pong");
    } else if (index % 3 === 0) {
      pingy.push("ping");
    } else {
      pingy.push(index);
    }
  }
}


//user interface logic

$(document).ready(function() {
  $("form#ping-pong").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());

    pingPong(number);

    pingy.forEach(function(number) {
      $("#output").append('<li>' + number + "</li>");
    });
  });
});
