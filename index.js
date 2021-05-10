$(document).ready(function(){

function turnPage(){

  if(event.target.classList.contains("fa-compress-arrows-alt")){
    event.target.classList.add("fa-arrow-circle-right")
    event.target.classList.remove("fa-compress-arrows-alt")
    setTimeout(function(){
    document.querySelector("#disappear-this").classList.remove("invisible")
    document.querySelector("#disappear-this-2").classList.remove("invisible")
    document.querySelector("#disappear-this-3").classList.remove("invisible")


    },700)
    $(".about-me").addClass("invisible")
    // $("#about-row").addClass("invisible")
    $(".corner-div").animate({
      width: "400px",
    height:"180px"
  },700,"linear")
  // $(".about-img").addClass("invisible")

}else{

event.target.classList.remove("fa-arrow-circle-right")
event.target.classList.add("fa-compress-arrows-alt")
document.querySelector("#disappear-this").classList.add("invisible")
document.querySelector("#disappear-this-2").classList.add("invisible")
document.querySelector("#disappear-this-3").classList.add("invisible")

  // $(".about-img").fadeIn("slow");
// document.querySelector("#cover").classList.remove("background-image-1")
// document.querySelector("#cover").classList.add("br-white")
setTimeout(function(){
  $(".about-me").removeClass("invisible")
  // $("#about-row").removeClass("invisible")

  // $("#bio-div").removeClass("invisible")
},700)
  $(".corner-div").animate({
    width:"100%",
    height:"460vmax",
  },700,"linear")
  // document.querySelectorAll(".about-img").classList.remove("invisible")
}
}
$("#turn-page").click(function(){
  turnPage()

})
})
