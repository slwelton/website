window.onload=makeModal

function makeModal() {
  var modal = document.getElementById("myModal");

  for(var i = 0; i < 2; i++) {
      var img = document.getElementById("myImg-" + i);
      var modalImage = document.getElementById("myImg-" + i);
        img.onclick = function(){
          modal.style.display="block";
          modalImage.src = img.src;
        }
      }

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
      modal.style.display = "none";
  }
}
