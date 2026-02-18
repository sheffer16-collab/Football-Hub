$(document).ready(function () {

  $(".laliga-side a").click(function (e) {
    e.preventDefault(); 
    let teamName = $(this).text();
    let url = $(this).attr("href");

    $("#teamMessage").text("בחרת בקבוצה: " + teamName);

    $(".laliga-side li").css("background-color", "");
    $(this).parent().css("background-color", "#ffe6e6");

    
    setTimeout(function () {
      window.open(url, "_blank");
    }, 700);
  });

});

