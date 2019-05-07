
/*
   �������� animate (obj,attrObj,dur,fun,callback)
   obj   Ҫ�����Ķ���
   attrobj   Ҫ���������Զ���{width:xxxx,height:xxx,left:xxxx,top:xxxx,opacity:xxx}
   dur   ����ʱ��
   fun   ������ʽ
   callback �仯���֮��Ҫ���������
*/
/*
  ���� colorAnimate (obj,attr,val,dur,fn,callback)
  obj   Ҫ����Ķ���
  attr  Ҫ���������  background   color
  val   ������ɫ rbg    #
  fn    �����ķ�ʽ
  callback  �仯���֮��Ҫ���������
*/
//�����㷨
/*
		  Linear���޻���Ч��(�����˶�)��
			Quad�����η��Ļ�����
			Cubic�����η��Ļ���
			Quartic���Ĵη��Ļ�����
			Quintic����η��Ļ�����
			Sinusoidal���������ߵĻ�����
			Exponential��ָ�����ߵĻ�����
			Circular��Բ�����ߵĻ�����
			Elastic��ָ��˥�����������߻�����
			Back��������Χ�����η���������
			Bounce��ָ��˥���ķ���������
			

			ÿ��Ч����������������ʽ�����������ֱ��ǣ�
			easeIn����0��ʼ���ٵ��˶���
			easeOut�����ٵ�0���˶���
			easeInOut��ǰ��δ�0��ʼ���٣����μ��ٵ�0���˶���
			


			�������ĸ������ֱ����
				t--- current time����ǰʱ�䣩��0 +=60   
				b--- beginning value����ʼֵ����100  
				c--- change in value���仯������500-100
				d---duration������ʱ�䣩  5000
			Tween.Quad.easeInt()
	     	����Ľ�����ǵ�ǰ���˶�·�̡�
		   ������:Code����
		   �������Ͳ��Եĵط�ϣ����λ������������
		   50
    Tween.Linear     
	Tween.Quad.easeIn
*/
 Tween = {  
    Linear: function(t,b,c,d){ return c*t/d+b; },
    Quad: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c*(t/=d)*(t-2) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        easeInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },
    Back: {
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t,b,c,d){
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOut: function(t,b,c,d){
            if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
            else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
 }

 /*
   �������� animate (obj,attrObj,dur,fun,callback)
   obj   Ҫ�����Ķ���
   attrobj   Ҫ���������Զ���{width:xxxx,height:xxx,left:xxxx,top:xxxx,opacity:xxx}
   dur   ����ʱ��
   fun   ������ʽ
   callback �ص����� 
   */
  
function animate (obj,attrObj,dur,fun,callback) {
	 clearInterval(obj.t);
	if(arguments.length==2){
	  dur=500;
	  fun=Tween.Linear;
	  callback=null;
	}
	if(arguments.length==3){
	  if(typeof dur=="number"){
	  dur=dur;
	  fun=Tween.Linear;
	  callback=null;
	  }
	  if(typeof dur=="function"){
	    if(dur.length>=4){ 
			  fun=dur;
			  callback=null;
			  dur=500;
		  }else{  
			  fun=Tween.Linear;
			  callback=dur;
			  dur=500;
		}
	  
	  }
	}
	if(arguments.length==4){
	   if(typeof dur=="number"){
	     dur=dur;
		 if(fun.length>=4){
			  fun=fun;
			  callback=null;
			  
		}else{
	     	  callback=fun;
			  fun=Tween.Linear;
		   
		}
		 
	   }else{	  
				  callback=fun;
				  fun=dur;
				  dur=500
				 
			
	  }
	}
  var time=0;
	var start={};
  var change={};
  for (var i in attrObj) {
    start[i]=setCss(obj,i);
    change[i]=attrObj[i]-start[i];
  }

	obj.t=setInterval(function(){
	  if(time>=dur){
	   clearInterval(obj.t);
	   for (var i in attrObj) {
		 setCss(obj,i,attrObj[i]);
	   }
	   if(callback){
	     callback.call(obj);
	   }
	  }else{
	  for (var i in attrObj) {
	   setCss(obj,i,fun(time,start[i],change[i],dur));
	  }
	  time+=60
	  }
	},60)
  }




 function setCss (obj,attr,val) {
    if(obj.nodeType!==1){
      return;
    }
    //��ʼ������
    var attr=attr.replace(/^\s*|\s*$/g,"");
    //��ȡֵ
    if(arguments.length==2){
       //λ�úͳߴ�
      if(attr=="height"||attr=="width"||attr=="top"||attr=="left"||attr=="right"|| attr=="bottom"){
        var val=obj.currentStyle?parseInt(obj.currentStyle[attr]):parseInt(getComputedStyle(obj,null)[attr]);
        if(!val){
          var str="offset"+attr.replace(attr.charAt(0),attr.charAt(0).toUpperCase());
          val=obj[str];
        }
		    return val;
      }

      if(attr=="padding"||attr=="margin"||attr=="paddingTop"||attr=="paddingLeft"||attr=="paddingRight"||attr=="paddingBottom"||attr=="marginTop"||attr=="marginLeft"||attr=="marginRight"||attr=="marginBottom"){
        var cc= parseInt(obj.currentStyle? ((obj.currentStyle[attr]==undefined||obj.currentStyle[attr]=="auto")?0:obj.currentStyle[attr]):(getComputedStyle(obj,null)[attr]==undefined?0:getComputedStyle(obj,null)[attr]));
        return cc;
      }
      //͸����
      if(attr=="opacity"){
        return obj.currentStyle?parseFloat(obj.currentStyle[attr]||1):parseFloat(getComputedStyle(obj,null)[attr]||1);
      }
      //��ɫ
      if(attr=='color'||attr=="background"|| attr=="backgroundColor"||attr=='borderBottomColor'||attr== 'borderLeftColor'||    attr=='borderRightColor'||attr=='borderTopColor'){
        var colors=obj.currentStyle?(obj.currentStyle[attr]||"#000000"):(getComputedStyle(obj,null)[attr]||"#000000");
        //��ȡ����
        return getColor(colors);    
		  }
      if(attr=="scrollTop"){
        return obj.scrollTop;
      }

      return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr];

    }else if(arguments.length==3){
      switch (attr) {
        case "width":
        case "height":
        case "top":
        case "left":
        case "bottom":
        case "right":
        case "padding":
        case "margin":
        case "paddingLeft":
        case "paddingRight":
        case "paddingTop":
        case "paddingBottom":
        case "marginLeft":
        case "marginRight":
        case "marginTop":
        case "marginBottom":
        obj.style[attr]=val+"px";
        break;
        case "opacity":
        obj.style[attr]=val;
        obj.style.filter="alpha(opacity="+val*100+")"
        break;
        case "scrollTop":
        obj.scrollTop=val;
        break;
        case 'color':
        case "background":
        case "backgroundColor":
        case 'borderBottomColor':
        case 'borderLeftColor':
        case 'borderRightColor':
        case 'borderTopColor':
        obj.style[attr]=val;
        break;
        default:
        obj.style[attr]=val;
        }
    }
  }

//��ɫ���䶯��
 //�����ɫ
function getColor (color) {
  var str,r,g,b,arr;
  if(typeof color=="string"){
    //16 ����
    if(color.charAt(0)==="#"){
	  str=color.substring(1)
	  r=parseInt(str.substr(0,2),16);
	  g=parseInt(str.substr(2,2),16);
	  b=parseInt(str.substr(4,2),16);
	  arr=[r,g,b]
	  return arr;
	}else{
	  str=color.substring(4,color.length-1)
	  return str.split(",")
	}
  }
  if(color instanceof Array){
    return color;
  }
}

/*
  ���� colorAnimate (obj,attr,val,dur,fn,callback)
  obj   Ҫ����Ķ���
  attr  Ҫ���������  background   color
  val   ������ɫ rbg    #
  fn    �����ķ�ʽ
  callback  �仯���֮��Ҫ���������
*/
function colorAnimate (obj,attr,val,dur,fn,callback) {
if(obj.time){
  clearInterval(obj.time);
}
 
  var fn=fn||Tween.Linear;
  var start=setCss(obj,attr);
  var end=getColor(val);
  var times=0,r,g,b;
 obj.time= setInterval(function  () {
	 if(times>=dur){
	   clearInterval(obj.time)
       obj.time=null;
		   if(callback){
	        callback()
	      }
		  
	 }else{
      r=fn(times,parseInt(start[0]),parseInt(end[0])-parseInt(start[0]),dur)
      g=fn(times,parseInt(start[1]),parseInt(end[1])-parseInt(start[1]),dur)
      b=fn(times,parseInt(start[2]),parseInt(end[2])-parseInt(start[2]),dur)	
		
      setCss(obj,attr,"rgb("+parseInt(r)+","+parseInt(g)+","+parseInt(b)+")")
      times+=60;
	   }
  },60)

}