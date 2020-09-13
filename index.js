var numb = document.querySelectorAll(".drum").length;
for (var i=0; i<numb; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function () {

var pressed = this.innerHTML;
sound(pressed);


  });
}

document.addEventListener("keydown", function(event){
 sound(event.key);
})

function sound(key){
  switch (key) {
    case "s":
             var p = new Audio("sounds/tom-1.mp3");
             p.play();
             break;
   case "a":
            var p = new Audio("sounds/tom-2.mp3");
            p.play();
            break;
  case "u":
           var p = new Audio("sounds/kick-bass.mp3");
           p.play();
           break;
  case "m":
          var p = new Audio("sounds/crash.mp3");
          p.play();
          break;
  case "y":
           var p = new Audio("sounds/snare.mp3");
           p.play();
           break;
  case "i":
          var p = new Audio("sounds/tom-3.mp3");
          p.play();
          break;
  case "n":
           var p = new Audio("sounds/tom-4.mp3");
           p.play();
           break;
    default: console.log(pressed);

  }
}
