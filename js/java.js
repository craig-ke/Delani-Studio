$(document).ready(function () {
  $(".design-img").click(function () {
    $(".design-text").toggle();
    $(".design-img").hide();
  })
  $(".development-img").click(function () {
    $(".development-text").toggle();
    $(".development-img").hide();
  });
  $(".product-img").click(function () {
    $(".product-text").toggle();
    $(".product-img").hide();
  });
  $(".design-text").click(function () {
    $(".design-img").toggle();
    $(".design-text").hide();
  });
  $(".development-text").click(function () {
    $(".development-img").toggle();
    $(".development-text").hide();
  });
  $(".product-text").click(function () {
    $(".product-img").toggle();
    $(".product-text").hide();
  });
});

$(document).ready(function () {
  $(".col-md-3").mouseover(function () {
    $(".col-md-3").css("border-size", "5px");
  });
});

$(document).ready(function(){
  $("").hover(function(){
    $(this).css("background-color", "whiteshadow");
    }, function(){
    $(this).css("background-color", "whiteshadow");
  });
});


function myname() {
  var name = document.getElementById("name").value;
  if (name === "" || email == "") {
    alert("Please enter name and email correctly...");
  } else {
    alert(name + "" + " we have recieved your message. We'll get to you as soon as possible!");
  };
};


function reset() {
  document.getElementById("myform").reset();
} 
$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});