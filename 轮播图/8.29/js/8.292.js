window.onload=function(){
    let box=document.querySelector('.box');
    let ul=document.querySelector('ul.img');
    let img=ul.querySelectorAll('li');
    let width=parseInt(getComputedStyle(img[0],null).width);
    let circle=document.querySelectorAll('.circle>li');
    let left=document.querySelector('.left');
    let right=document.querySelector('.right');
    let now=0;
    let next=0;
    let t=setInterval(move,3000);
    let flag=true;
    function move(way='l'){
        if(way==='l'){
            next=now+1;
            if(next>=img.length){
                next=0;
            }
            img[next].style.left=width+'px';
            animate(img[now],{left:-width},function(){
                flag=true;
            });
            animate(img[next],{left:0});
        }else if(way==='r'){
            next=now-1;
            if(next<0){
                next=img.length-1;
            }
            img[next].style.left=-width+'px';
            animate(img[now],{left:width},function(){
                flag=true;
            });
            animate(img[next],{left:0});
        }
        circle[now].classList.remove('active');
        circle[next].classList.add('active');
        now=next;
    }
    box.onmouseover=function(){
        clearInterval(t);
    };
    box.onmouseout=function(){
        t=setInterval(move,3000);
    };
    left.onclick=function(){
        if(flag){
            flag=false;
            move('r');
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
            if(flag){
                flag=false;
                if(index>now){
                    img[index].style.left=width+'px';
                    animate(img[now],{left:-width},function(){
                                flag=true;
                    });
                    animate(img[index],{left:0});
                    circle[now].classList.remove('active');
                    circle[index].classList.add('active');
                    now=index;
                }else if(index<now){
                    img[index].style.left=-width+'px';
                    animate(img[now],{left:width},function(){
                        flag=true;
                    });
                    animate(img[index],{left:0});
                    circle[now].classList.remove('active');
                    circle[index].classList.add('active');
                    now=index;
                }else{
                    flag=true;
                }
            }
        }
    });
    // for(let i=0;i<circle.length;i++){
    //     circle[i].onclick=function(){
    //         if(flag){
    //             flag=false;
    //         if(i>now){
    //             img[i].style.left=width+'px';
    //             animate(img[now],{left:-width},function(){
    //                 flag=true;
    //             });
    //             animate(img[i],{left:0});
    //             circle[now].classList.remove('active');
    //             circle[i].classList.add('active');
    //             now=i;
    //         }else if(i<now){
    //             img[i].style.left=-width+'px';
    //             animate(img[now],{left:width},function(){
    //                 flag=true;
    //             });
    //             animate(img[i],{left:0});
    //             circle[now].classList.remove('active');
    //             circle[i].classList.add('active');
    //             now=i;
    //         }else{
    //             flag=true;
    //         }
    //         }
    //     }
    // }

















}