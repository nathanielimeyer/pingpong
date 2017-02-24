// Business logic
var talkBack = [];

var echoFunction = function(number) {
  talkBack = [];
  for (i = 1; i <= number; i++) {
    talkBackPusher(i);
  };
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
      talkBack = echoFunction(inputNumber);
      $(".response").show();
      talkBack.forEach(function(element){
        $("#echoInput").append("<li>" + element + "</li>");
      });
    }
    echoInput = "";
  });
});
