function copy(){
    var text="";
    for(var i=1;i<50;i++){
        if(!document.getElementById("th"+i)){
            break;
        }
        if(document.getElementById("se"+i).value !== "0"){
            text += document.getElementById("th"+i).textContent+document.getElementById("se"+i).value+"\r";
        }
    }
    document.location.href = "https://social-plugins.line.me/lineit/share?url="+text;
}
