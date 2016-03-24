$(document).ready(function() {
  $("form#dating").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age) {
      if (age <= 30 && gender === 'female') {
      $("#celeb1").show();
      $("#celeb2").hide();
      $("#celeb3").hide();
      $("#celeb4").hide();
    } else if (age > 30 && gender === 'female') {
      $("#celeb2").show();
      $("#celeb1").hide();
      $("#celeb3").hide();
      $("#celeb4").hide();
    } else if (age <= 30 && gender === 'male') {
      $("#celeb3").show();
      $("#celeb1").hide();
      $("#celeb2").hide();
      $("#celeb4").hide();
    } else {
      $("#celeb4").show();
      $("#celeb1").hide();
      $("#celeb2").hide();
      $("#celeb3").hide();
    }
    } else {
      $("#error1").show();
    }



    event.preventDefault();
  });
});
