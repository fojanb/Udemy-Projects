// jQuery start :

$(function () {
  $("#item1").click(function () {
    $("#subItem1")
      .slideToggle()
      .css({ "text-align": "center", "font-size": "10px" });
    $("#subItem1").mouseleave(function () {
      $("#subItem1").slideUp();
    });
  });
  $("#item2").click(function () {
    $("#subItem2")
      .slideToggle()
      .css({ "text-align": "center", "font-size": "10px" });
    $("#subItem2").mouseleave(function () {
      $("#subItem2").slideUp();
    });
  });
  $("#item3").click(function () {
    $("#subItem3")
      .slideToggle()
      .css({ "text-align": "center", "font-size": "10px" });
    $("#subItem3").mouseleave(function () {
      $("#subItem3").slideUp();
    });
  });
  $("#item4").click(function () {
    $("#subItem4")
      .slideToggle()
      .css({ "text-align": "center", "font-size": "10px" });
    $("#subItem4").mouseleave(function () {
      $("#subItem4").slideUp();
    });
  });
});
