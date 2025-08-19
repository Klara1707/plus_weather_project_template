
<script>
  function openPopup(id) {
    document.getElementById(id).style.display = "flex"
  }

  function closePopup(id) {
    document.getElementById(id).style.display = "none"
  }
</script>

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}