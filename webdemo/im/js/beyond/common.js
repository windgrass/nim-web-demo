"use strict";


// 点击关闭聊天窗
var closeRpanel = document.getElementById("closeRPanel");
closeRpanel.addEventListener("click", function(){
    $("#rightPanel").css({"right":"-631px"});
});