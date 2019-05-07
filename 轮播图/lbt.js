window.onload=function(){
    var banner=document.getElementById("banner");
    var leftBtn=document.getElementById("left");
    var rightBtn=document.getElementById("right");
    var imgs=document.getElementById("imgs").getElementsByTagName("li");
    var buttons=document.getElementById("button").getElementsByTagName("li");
    var count=0;
    var timer=null;

    //定时器
    timer=setInterval(changeCount,1000);
    banner.onmouseover=function(){
        clearInterval(timer);
    }
    banner.onmouseout=function(){
       timer=setInterval(changeCount,1000);
    }
    leftBtn.onclick=function(){
        changeCount(true);
    }
    rightBtn.onclick=function(){
        changeCount();
    }
    //点击右下角按钮，改变
    for(var i=0;i<buttons.length;i++){
        buttons[i].index=i;
        buttons[i].onclick=function(){
            count=this.index;
            changeImg();
        }
    }

    function changeImg(){
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.display="none";
            buttons[i].className="";
        }
        imgs[count].style.display="block";
        buttons[count].className="active";
    }

    function changeCount(flag){
        if(flag){
            count--;
            if(count<0){
                count=imgs.length-1;
            }
        }
        else{
            count++;
            if(count>imgs.length-1){
             count=0;
            }
        }
        changeImg();
    }
}