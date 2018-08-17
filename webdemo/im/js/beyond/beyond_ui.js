"use strict";

function curRoleIsTeacher() {
    if (userUID === '2') {
        return true;
    }
    return false;
}

function showTeacherDialog() {
    console.log("点击老师");
    $("[data-account='2']").click();
}

$(document).ready(function () {
    if (curRoleIsTeacher()) {
        $("#left-panel").removeClass("hide");
        $("#chatVernier").removeClass("hide");
        $("#vdo-wrap").addClass("hide");
        $("#main-wrap").removeClass("by-w90");
        $("#main-wrap").addClass("by-w70");
        $("#techTabletWrap").removeClass("hide");
        $("#stuWrap").addClass("hide");
    } else {
        /* $("#rightPanel").css({
            width: "710px",
            margin:"auto"
        }); */
        $("#vdo-wrap").removeClass("hide");
        autoClickFriends(); // 学生 自动检测老师li是否加载, 已加载触发点击事件
    }
    
});

// 检测是否加载了好友列表, 已加载点击
function autoClickFriends(){
    if (undefined !== $("[data-type='friends']")[0]) {
        console.log("friends auto click");
        $("[data-type='friends']").click();
        autoClickTecher();
    }else{
        console.log("check friends");
        setTimeout("autoClickFriends()", 1000);
    }
}

// 检测是否加载了老师 li, 已加载触发点击事件
function autoClickTecher()
{
    if (undefined !== $("[data-account='2']")[0]) {
        console.log("techer auto click");
        $("[data-account='2']").click();
    }else{
        setTimeout("autoClickFriends()", 1000);//点击 friends 刷新好友列表
        console.log("check techer");
    }
}