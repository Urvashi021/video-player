function vplay()
{
    var a = document.getElementById("vdo");
    a.play();
}
function vpause() {
        var a = document.getElementById
            ("vdo");
        a.pause();
    }
 function upload()
 {
    var a = document.getElementById("vupload").value.replace(/.*(\/|\\)/,
'');
   // window.alert(a);
   var b = document.getElementById("vdo");
   b.src=a;
 }   