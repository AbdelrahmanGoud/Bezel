
$(".up").click(function () {
   $("html,body").animate({ scrollTop: "0" }, 1000)
})

let osscor = $("#home").height()
$(".up").fadeOut(10)
$(window).scroll(function () {

   let donscroll = $(window).scrollTop()

   if (donscroll >= osscor) {
      $(".up").fadeIn(100)
      $(".navbar").addClass("changnav")
      $(".navbar").removeClass("container")
      $(".navbar").removeClass("px-5")
      $(".navbar").removeClass("navbar-light")
      $(".navbar").addClass("navbar-dark")
      $("#chinglogo").removeClass("w-50")
      $("#chinglogo").addClass("w-25")
      $(".navbar").removeClass("bordernav")


   }
   else {
      $(".up").fadeOut(100)
      $(".navbar").removeClass("changnav")
      $(".navbar").addClass("container")
      $(".navbar").addClass("px-5")
      $(".navbar").removeClass("navbar-dark")
      $(".navbar").addClass("navbar-light")
      $("#chinglogo").removeClass("w-25")
      $("#chinglogo").addClass("w-50")
      $(".navbar").addClass("bordernav")

   }

})

$(".nav-link").click(function () {

   let selectsection = $(this).attr("href")

   let mytop = $(selectsection).offset().top
   $("html,body").animate({ scrollTop: mytop }, 1000)

})

let lis = $(".colorbox li");
lis.eq(0).css("background-color", "tomato")
lis.eq(1).css("background-color", "turquoise")
lis.eq(2).css("background-color", "yellow")
lis.eq(3).css("background-color", "teal")
lis.eq(4).css("background-color", "violet")
lis.eq(5).css("background-color", "orangered")

lis.eq(6).css("background-color", "rgb(1, 1, 36)")
lis.eq(7).css("background-color", "darkgoldenrod")
lis.eq(8).css("background-color", "slateblue")
lis.eq(9).css("background-color", "peru")
lis.eq(10).css("background-color", "crimson")
lis.eq(11).css("background-color", "darkred")

$(".colorbox li").click(function () {

   let chan = $(this).css("background-color");

   $(".chaged").css("color", chan)
})

$(".colorcontainer i").click(function () {

   let left = $(".colorcontainer").css("left")
   let ourwidth = $(".colorbox").outerWidth()
   if (left < "0px") {
      $(".colorcontainer").animate({ left: "0" }, 1000)

   }
   else {
      $(".colorcontainer").animate({ left: `-${ourwidth}` }, 1000)
   }
})

let date =new Date();
let Sdate= date.getFullYear()
document.querySelector('.showDate').innerHTML=`Copyright ${Sdate}. All rights reserved.`;
$(document).ready(function(){
   $('.lodang-page').fadeOut(2000,()=>{
      $('body').css('overflow','auto')
   })
})