var canvas = document.getElementById('gamezone');
var context = canvas.getContext('2d');
var scoreshow = document.getElementById('score');
var closer = document.querySelector('.closer')
var birdimg = new Image();
var hinhnenchinh = new Image();
var ongtren = new Image();
var ongduoi = new Image();
birdimg.src="picture/bird.png";
hinhnenchinh.src="picture/nenchinh.png";
ongtren.src="picture/ongtren.png";
ongduoi.src="picture/ongduoi.png";

// nap cac hinh vao
// tao 1 so bien can thiet

var score = 0;
var khoangcach2ong =140;
var khoangcachdenongduoi;
//tao ra 1 obj chim voi tao di x y la nua canvas

var bird={
    x: hinhnenchinh.width/5,
    y: hinhnenchinh.width/5 
}

var ong=[];
ong[0]={
     x:canvas.width,
     y:0
}

function run(){
    context.drawImage(hinhnenchinh,0,0);
    context.drawImage(birdimg,bird.x,bird.y);

    for(var i=0;i<ong.length;i++){
        khoangcachdenongduoi=ongtren.height+khoangcach2ong;
        context.drawImage(ongtren,ong[i].x,ong[i].y);
        context.drawImage(ongduoi,ong[i].x,ong[i].y+khoangcachdenongduoi);
        ong[i].x-=5;

        if(ong[i].x==canvas.width/2){
            ong.push({
                x:canvas.width,
                y:Math.floor(Math.random()*ongtren.height)-ongtren.height


            })
        }
        if(ong[i].x==0)ong.splice(0,1);
        if(ong[i].x==bird.x)score++;
        if(bird.y+birdimg.height==canvas.height||
        bird.x+birdimg.width>=ong[i].x&& bird.x<=ong[i].x+ongtren.width
        &&(bird.y<=ong[i].y+ongtren.height||
            bird.y+birdimg.height>=ong[i].y+khoangcachdenongduoi)
            ){
                showcloser();
                return ;
            }
}


    scoreshow.innerHTML="score: "+score;

    bird.y+=3;
    requestAnimationFrame(run);
}
//function  bay len
function showcloser(){
    closer.classList.add('open')
}
document.addEventListener("keydown",function(){
    bird.y-=70;
})

run();