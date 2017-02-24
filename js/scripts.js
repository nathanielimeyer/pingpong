// Business logic
var talkBack = [];

var signChecker = function(number) {
  talkBack = [];
  if (number >= 1) {
    for (i = 1; i <= number; i++) {
      talkBackPusher(i);
    };
  } else {
    for (i = 1; i >= number; i--) {
      talkBackPusher(i);
    };
  }
  return talkBack;
};

var talkBackPusher = function(number) {
  if (i % 15 === 0) {
    talkBack.push("ping-pong");
  }
  else if (i % 5 === 0) {
    talkBack.push("pong");
  }
  else if (i % 3 === 0) {
    talkBack.push("ping");
  } else {
    talkBack.push(i);
  }
};

// Front end logic
$(function() {
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    $("#echoInput").text("");
    inputNumber = $("input#userInput").val();
    if (!inputNumber) {
      $("#errorFeedback").show();
    } else {
      $("#errorFeedback").hide();
      talkBack = signChecker(inputNumber);
      $(".response").show();
      talkBack.forEach(function(element){
        outputFunction(element);
      });
    }
  });
});

var outputFunction = function(element) {
  $("body").removeClass();
  if (typeof(element) === 'number') {
    $("body").addClass("number");
  }
  else {
    $("body").addClass(element);
  }
  $("#echoInput").append("<li>" + element + "</li>");
};
