window.onload=function(){
    let box=document.querySelector('.box');
    let ul=document.querySelector('ul.img');
    let img=ul.querySelectorAll('li');
    let circle=document.querySelectorAll('.circle>li');
    let left=document.querySelector('.left');
    let right=document.querySelector('.right');
    let now=0;
    let next=0;
    let t=setInterval(move,3000);
    let flag=true;
    function move(way='r'){
        if(way==='r'){
            next=now+1;
            if(next>=img.length){
                next=0;
            }
        }else if(way==='l'){
            next=now-1;
            console.log(1);
            if(next<0){
                next=img.length-1;
            }
        }
        img[next].classList.add('zindex');
        img[now].classList.remove('zindex');
        animate(img[now],{opacity:0},400);
        animate(img[next],{opacity:1},400,function () {
            flag=true;
        });
        circle[now].classList.remove('active');
        circle[next].classList.add('active');
        now=next;
    }
    box.onmouseover=function () {
            clearInterval(t);
    };
    box.onmouseout=function () {
        t=setInterval(move,3000);
    };
    left.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        move('l');
    };
    right.onclick=function () {
        if(!flag){
            console.log(1);
            return;
        }
        flag=false;
        move('r');
    };
    for(let i=0;i<circle.length;i++){
        circle[i].index=i;
        circle[i].onmouseover=function(){
            let that=this;
            to=setTimeout(function(){
                animate(img[now],{opacity:0},400);
                animate(img[that.index],{opacity:1},400);
                circle[now].classList.remove('active');
                circle[that.index].classList.add('active');
                now=that.index;
            },200);
        };
        circle[i].onmouseout=function(){
            clearTimeout(to);
        }
    }

















}