var cnt=1;
setInterval(function(){
    document.getElementById('radio'+cnt).checked = true;
    cnt++;
    if(cnt>15){
        cnt=1;
    }
},5000);

var btn = document.querySelector("button");
var post = document.querySelector(".post");
var widget = document.querySelector(".star-widget");
var editBtn = document.querySelector(".edit");
btn.onclick=()=>{
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = ()=>{
        widget.style.display = "block";
        post.style.display = "none";
    }
    return false;
}

