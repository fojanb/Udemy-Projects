// jQuery start :
$(function () {
  // Practicing some jQuery events and effects
  $("p").click(function () {
    $("p").hide();
  });

  // $("p").mouseenter(function(){
  //     alert('You mouse over this sentence');
  // });

  // $("#button1").click(function () {
  //   $("#p1").fadeIn();
  //   $("#p2").fadeIn("slow");
  //   $("#p3").fadeIn(1000);
  // });

  // $("#button2").click(function () {
  //   $("#p1").fadeOut();
  //   $("#p2").fadeOut("slow");
  //   $("#p3").fadeOut(1000);
  // });

  // $("#button1").click(function () {
  //     $("#p1").fadeToggle();
  //     $("#p2").fadeToggle("slow");
  //     $("#p3").fadeToggle(1000);
  //   });

  // $("#button1").click(function () {
  //       $("#p1").fadeTo('slow',0.15);
  //       $("#p2").fadeTo("slow",0.4);
  //       $("#p3").fadeTo('slow',0.7);
  //     });

  // $("#button1").click(function () {
  //       $("#p1").slideToggle('slow');
  //       $("#p2").slideToggle('slow');
  //       $("#p3").slideToggle('slow');
  //     });

  // $("#button2").click(function () {
  //   $("#square").animate({left: '250px'});

  // });

  // $("#button1").click(function () {
  //   var txt1 = "<p>Text.</p>"; // Create text with HTML
  //   var txt2 = $("<p></p>").text("Text."); // Create text with jQuery
  //   var txt3 = document.createElement("p").innerHTML = '<p>Text.</p>'; // Create text with DOM
  //   $("body").append(txt1, txt2, txt3); // Append new elements
  // });

  $("#button3").click(function () {
    $('#ajaxHolder').load('ajax.txt');
     });
}); //jQuery finished
