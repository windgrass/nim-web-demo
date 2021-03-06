"use strict";

var vdo = document.getElementById("by-vdo");
var vdoChoice = document.getElementsByClassName("by-video-choice");
vdo.addEventListener("play", function () {
    console.log('start play');
});

vdo.addEventListener("ended", function (e) {
    console.log('video end');
    vdo.classList.add("by-blur");
    vdoChoice[0].classList.remove("hide");
});

/* 视频控制按钮事件 */
var btnReplayVideo = document.getElementById("replay-video");
var btnStartGame = document.getElementById("start-game");
var videoWrap = document.getElementById("vdo-wrap");
var tabletWrap = document.getElementById("tablet-wrap");
var showVdo = document.getElementById("by-show-vdo");
var callTech = document.getElementById("callTecher");

// 再看一遍 按钮事件
btnReplayVideo.addEventListener("click", function (e) {
    vdoChoice[0].classList.add("hide");
    vdo.classList.remove("by-blur");
    vdo.play();
});

// 闯关去 按钮事件
btnStartGame.addEventListener("click", function (e) {
    vdo.pause();
    vdo.currentTime = 0;
    videoWrap.classList.add("hide");
    tabletWrap.classList.remove("hide");
});

// 看教程 按钮事件
showVdo.addEventListener("click", function () {
    tabletWrap.classList.add("hide");
    vdoChoice[0].classList.add("hide");
    videoWrap.classList.remove("hide");
    vdo.classList.remove("by-blur");
});

// 求助老师 按钮事件
callTech.addEventListener("click", function () {
        console.log("%c 呼叫老师", "color:green; font-size: 20px;");
        var curAccount = document.querySelector("[data-account = '2']");
        if (null === curAccount) {
            alert("获取老师信息失败, 正在重试");
            autoClickFriends();
        } else {
            /* var e = document.createEvent("MouseEvents");
            e.initEvent("click", true, true);
            curAccount.dispatchEvent(e); */
            $("#rightPanel").css({
                'right': '10px'
            });
        }
    }
    /* if ('undefined' === $("[data-account='2']")[0]) {
        alert("获取老师信息失败，在自动重试......");
        $("[data-type='friends']").click();
    } else {
        $("[data-account='2']").click();
        $("#rightPanel").removeClass("hide");
        $("#rightPanel").css({'right':'10px'});
    } */
);

var closeRpanel = document.getElementById("closeRPanel");
closeRpanel.addEventListener("click", function(){
    $("#rightPanel").css({"right":"-631px"});
});