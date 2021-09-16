document.onkeydown = checkKey;
var start=0;
var s=1;
function getSyn(f){
    var x;
    var data= fetch('https://words.bighugelabs.com/api/2/{api key}/'+f+'/json')
    .then(response => response.json())
    .then(data => x=data.noun.syn);
    return x
}
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {}
    else if (e.keyCode == '40') {}
    else if (e.keyCode == '37') {
    }
    else if (e.keyCode == '39') {

        var txt =document.activeElement.value;
        console.log(txt);
        var x;
        var data= fetch('https://words.bighugelabs.com/api/2/{api key}/'+txt+'/json')
        .then(response => response.json())
        .then(data => 
            getIt(data));
    }

}
function getIt(data){
    console.log(data);
    try {
        if(data.noun.syn){
            alert(data.noun.syn);
        }else{
            alert(data);
        }
      }
      catch(err) {
        alert(data);
      }

}