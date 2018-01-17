$(document).ready(function(){
  var $botones = $(".control")
  //console.log($botones);
  $botones.click(cargarImagen)
  //  alert("Hola de nuevo");
  var target = 0;
})

var cargarImagen = function(){
  //console.log($(this).data("target"))
  var $target = $(this).data("target");
  //console.log($($target));
  mostrarImagen($target);
  changeColorButton($target)
}

var mostrarImagen = function(target) {
  var $actualSlide = $("div.active");
  var $newImage = $("div[data-slide=" + target + "]");
$actualSlide.removeClass("active");
$newImage.addClass("active");
}

var changeColorButton = function(target){
  var $actualButton = $("button.active");
  var $newButton = $("button[data-target = "+ target + "]");
  $actualButton.removeClass("active");
  $newButton.addClass("active");
}

var changeControls = function(target){
  var $controlPrevieus = $(".previeus");
  var $controlNext = $(".next");
  
}
