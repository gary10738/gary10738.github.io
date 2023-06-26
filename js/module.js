function copy(){
    var text="";
    for(var i=1;i<50;i++){
        if(!document.getElementById("th"+i)){
            break;
        }
        text += document.getElementById("th"+i).textContent+document.getElementById("se"+i).value+"\n";
    }
    console.log(text);
    document.querySelector(text)
    document.execCommand('copy');
}