//can use .animate(hide) to move in/out the menu elements
console.log("linked");
var shiftOut = function(e){
   $(this).animate({width:"120px"},500);
};
var shiftIn = function(e){
  $(this).animate({width:"10px"},500);
}
$(".off-on").on("mouseover",shiftOut)
$(".off-on").on("mouseout", shiftIn);
//event currently happening on page load rathert han mouseover
// $(".off-on").off("mouseover");
