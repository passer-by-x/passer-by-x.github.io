window.onload = function(){
    $(function(){
        $("#list2").click(function(){
            $(".page .page2 .means").addClass("animated bounceInRight");
            $(".page .page2 .inforlist .infor-li1").addClass("animated bounceInDown");
            $(".page .page2 .inforlist .infor-li3").addClass("animated bounceInDown");
            $(".page .page2 .inforlist .infor-li2").addClass("animated bounceInUp");
            $(".page .page2 .inforlist .infor-li4").addClass("animated bounceInUp");
        })
        $("#list1,#list3,#list4,#list5").click(function(){
            $(".page .page2 .means").removeClass("animated bounceInRight");
            $(".page .page2 .inforlist .infor-li1").removeClass("animated bounceInDown");
            $(".page .page2 .inforlist .infor-li3").removeClass("animated bounceInDown");
            $(".page .page2 .inforlist .infor-li2").removeClass("animated bounceInUp");
            $(".page .page2 .inforlist .infor-li4").removeClass("animated bounceInUp");
        })
        $("#list3").click(function(){
            $(".page .page3 .major").addClass("animated bounceInRight");
        })
        $("#list1,#list2,#list4,#list5").click(function(){
            $(".page .page3 .major").removeClass("animated bounceInRight");
        })
        $("#list4").click(function(){
            $(".page .page4 .person").addClass("animated bounceInRight");
            $(".page .page4 .banner").addClass("animated rollIn");
        })
        $("#list1,#list2,#list3,#list5").click(function(){
            $(".page .page4 .person").removeClass("animated bounceInRight");
            $(".page .page4 .banner").removeClass("animated rollIn");
        })
        $("#list5").click(function(){
            $(".page .page5 .appr").addClass("animated bounceInRight");
            $(".page .page5 .sim-anim-6").addClass("animated zoomInLeft");
        })
        $("#list1,#list2,#list3,#list4").click(function(){
            $(".page .page5 .appr").removeClass("animated bounceInRight");
            $(".page .page5 .sim-anim-6").removeClass("animated zoomInLeft");
        })
    })
    $("#list3").click(function(){
        setTimeout(play,500)
    })
    function play(){
        var oWrap = document.getElementById('wrap');
            var oImg = oWrap.getElementsByTagName('img');
            var oImgLength = oImg.length;
            var Deg = 360/oImgLength;
            var nowX;
            var nowY;
            var lastX;
            var lastY;
            var minuseX = 0;
            var minuseY = 0;
            var roX = -10;
            var roY = 0;
            var timer;

            // 给img设置旋转度
            for(var i=0;i<oImgLength;i++){
                oImg[i].style.transform = 'rotateY('+i*Deg+'deg)translateZ(350px)';
                oImg[i].style.transition = 'transform 1s '+ (oImgLength-1-i)*0.1 +'s';
            }

            mTop();

                window.onresize = mTop;  // 窗口调整大小的时候

                function mTop(){
                    var wH = document.documentElement.clientHeight;
                    oWrap.style.marginTop = wH / 2 - 180 + 'px';
                }

            // 鼠标按下
            document.onmousedown = function(ev){
                ev = ev ||window.event;
                lastX = ev.clientX;
                lastY = ev.clientY;


                // 鼠标移动
                this.onmousemove = function(ev){
                    ev =ev||window.event;
                    nowX = ev.clientX;
                    nowY = ev.clientY;
                    // 求差
                    minuseX = nowX - lastX;
                    minuseY = nowY - lastY;
                    //roY变化越大  旋转越快
                    roX -= minuseY*0.1
                    roY += minuseX*0.2

                    oWrap.style.transform ='rotateX('+roX+'deg) rotateY('+roY+'deg)';
                    // 随着鼠标移动,当前点成前一点
                    lastX = nowX;
                    lastY = nowY;
                 }
                 // 鼠标抬起
                 this.onmouseup = function(){
                    this.onmousemove = null;
                 }
                return  false;//  取消鼠标的默认事件
            }
        
        }
        var banner = new FragmentBanner({
                container : "#banner1",//选择容器 必选
                imgs : ['images/ban1.png','images/ban4.png','images/ban5.png','images/ban2.png','images/ban3.png'],//图片集合 必选
                size : {
                    width : 1000,
                    height : 560
                },//容器的大小 可选
                //行数与列数 可选
                grid : {
                    line : 15,
                    list : 15
                },
                index: 0,//图片集合的索引位置 可选
                type : 2,//切换类型 1 ， 2 可选
                boxTime : 5000,//小方块来回运动的时长 可选
                fnTime : 10000//banner切换的时长 可选
            });

}