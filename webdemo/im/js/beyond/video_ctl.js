
var vdo = document.getElementById("by-vdo");

vdo.addEventListener("play", function(){
    console.log('start play');
});

vdo.addEventListener("ended", function(){
    console.log('end');
});

/* 视频控制按钮事件 */
var replayVideo = document.getElementById("replay-video");
replayVideo.addEventListener("click", function(e){
    vdo.play();
});
