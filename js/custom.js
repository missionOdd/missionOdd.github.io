jQuery(function($) {

    var canvas = $("#live2dcanvas")

    var div = document.createElement("img")

    var menu = document.querySelector("#menu")

    var Show = true

    div.style.position = "absolute"

    div.style.zIndex = "2"

    div.style.bottom = 0

    div.style.right = 0

    div.src = "/img/pioz.png"

    div.id = "handleClick"

    var text = ["点击前往首页，想回到上一页可以使用浏览器的后退功能哦",
        "翻页比较麻烦吗，点击可以显示这篇文章的目录呢",
        "想要去评论些什么吗？", , "深夜时要爱护眼睛呀",
        "手机扫一下就能继续看，很方便呢", "回到开始的地方吧", "该怎么称呼你呢", "要吐槽些什么呢",
        "留下你的邮箱，不然就是无头像人士了", "你的家在哪里呢，好让我去参观参观", "垃圾评论是禁止事项", "你看到我的小熊了吗", "点击图片可以放大呢",
        "想要听点音乐吗"
    ]


    //animated css 全局
    $.fn.extend({
        animateCss: function(animationName, callback) {
            var animationEnd = (function(el) {
                var animations = {
                    animation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    MozAnimation: 'mozAnimationEnd',
                    WebkitAnimation: 'webkitAnimationEnd',
                };

                for (var t in animations) {
                    if (el.style[t] !== undefined) {
                        return animations[t];
                    }
                }
            })(document.createElement('div'));

            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);

                if (typeof callback === 'function') callback();
            });

            return this;
        },
    });

    //animated hover
    $(".title").hover(function() {
        $(this).animateCss('infinite');

    }, function() {
        $(this).removeClass('infinite');

    });
    $(".subtitle").hover(function() {

        $(this).animateCss('infinite');
    }, function() {

        $(this).removeClass('infinite');
    });

    $(".avatar").hover(function() {

        $(this).animateCss('infinite');
    }, function() {

        $(this).removeClass('infinite');
    });

    $("#gotop").hover(function() {

        $(this).animateCss('rubberBand infinite');
    }, function() {

        $(this).removeClass('rubberBand infinite');
    });

    $(".icon").hover(function() {

        $(this).animateCss('rubberBand infinite');
    }, function() {

        $(this).removeClass('rubberBand infinite');
    });



    $(".archive-article").hover(function() {

        $(this).animateCss('tada infinite');
    }, function() {

        $(this).removeClass('tada infinite');
    });

    //
    menu.appendChild(div)

    $('#handleClick').on('click', function() {
        $('#handleClick').animateCss('bounce flip');
        if (!Show) {
            //$("#live2dcanvas").show()
            mdui.snackbar({
                message: 'ヾ(≧へ≦)〃[嗯!睡醒] ',
                position: 'right-bottom',
                timeout: 400
            });
            Show = true
        } else {
            //$("#live2dcanvas").hide()
            mdui.snackbar({
                message: '（┬＿┬）[掰掰!嘤嘤嘤] ',
                position: 'right-bottom',
                timeout: 400
            });
            Show = false
        }
    })

    //live2DButton
    var live2DButton = new mdui.Tooltip('#handleClick', {
        content: "显示/隐藏"
    });

    //commitTab
    var commitTab = new mdui.Tab('#tab');


    //提示框
    var $$ = mdui.JQ;


    var t;

    function timeOut() {
        var time =7000+ Math.random() * 10000;
        t = setInterval(function() {
            if (Show) {
               time =7000+ Math.random() * 10000
                var text = randomText()

                mdui.snackbar({
                    message: text,
                    position: 'right-bottom',
                    timeout: 3000
                });
            }
        }, time)

    }

    function randomText() {
        return text[~~(Math.random() * text.length)]
    }
    document.addEventListener('visibilitychange', function() { //浏览器切换事件
        if (document.visibilityState == 'hidden') { //状态判断
            clearInterval(t)
        } else {
            timeOut();
        }
    });

    //文字云
    $('.initial_hidden').each(function(i) {
        var $fader = $(this);
        setTimeout(function() {
            $fader.addClass('fade_this_in');
        }, i * 50 + 450);
        setTimeout(function() {
            $fader.addClass('gray_link');
        }, i * 50 + 1200);
    });
    $('#spikeyarea').mouseover(function(e) {
        $('#spikeydiv').toggleClass('spikeyhighlight');
    });
    $('#spikeyarea').mouseout(function(e) {
        $('#spikeydiv').toggleClass('spikeyhighlight');
    });


    $('#accost-btn').on('click', function() {
      daovoice('show')
    })


});
