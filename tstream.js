//can use .animate(hide) to move in/out the menu elements
console.log("linked");
$(".off-on").on("mouseover",function(){
   $(".off-on").animate({width:"100px"},500);
   $(".off-on").animate({width:"10px"},500);
});
// $(".off-on").off("mouseover");
