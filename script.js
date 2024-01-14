function vplay() {
  var a = document.getElementById("vdo");
  a.play();
}
function vpause() {
  var a = document.getElementById("vdo");
  a.pause();
}
/* function upload() {
  var a = document.getElementById("vupload").value.replace(/.*(\/|\\)/, "");
//   window.alert(a);
  var b = document.getElementById("vdo");
  b.src = a;
} */

var btn = document.getElementById("vupload");
btn.onchange = function () {
  var reader = new FileReader();
  reader.readAsDataURL(btn.files[0]);

  reader.onload = function () {
    var file_name = reader.result;
    var video = document.getElementById("vdo");
    video.src = file_name;
  };
};
