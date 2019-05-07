window.onload=function(){
    let box=document.querySelector(".box");
    let ul=document.querySelector('ul.img');
    let width=parseInt(getComputedStyle(box,null).width);
    let img=ul.querySelectorAll('li');
    let circle=document.querySelectorAll(".circle>li");
    let left=document.querySelector('.left');
    let right=document.querySelector('.right');
    let n=0;
    let flag=true;
    let t=setInterval(move,3000);
    function move(way='l'){
        if(way==='l'){
            n++;
            if(n>=img.length){
                n=0;
            }
        }else if(way==='r'){
            n--;
            if(n<0){
                n=img.length-1;
            }
        }
        animate(ul,{left:-width*n},800,function(){
            flag=true;
        });
        for(let i=0;i<circle.length;i++){
            circle[i].classList.remove('active');
        }
        circle[n].classList.add('active');
    }
    box.onmouseover=function(){
        clearInterval(t)
    };
    box.onmouseout=function(){
        t=setInterval(move,3000);
    };
    left.onclick=function(){
        if(flag){
            flag=false;
            move('r')
        }
    };
    right.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    };
    circle.forEach(function(value,index){
        value.onclick=function(){
            animate(ul,{left:-width*index},800);
            for(let i=0;i<circle.length;i++){
                circle[i].classList.remove('active');
            }
            circle[index].classList.add('active');
            n=index;
        }
    })



















}