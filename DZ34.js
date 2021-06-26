$(document).ready(function () {
    $("strong").css("color", "green").toggleClass("some");
    $("em").addClass("selected");
    $(".row mark").addClass("selected");
    $("a").css("text-decoration", "none");

    $('.container :contains("Задания")').addClass("selected2"); // Элементы с родителями...

    //$("strong").toggleClass("some");
    $(".row:eq(1)").removeClass("row");
    alert($("a:eq(1)").css("color"));
});