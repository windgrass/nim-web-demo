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
        $("techTabletWrap").removeClass("hide");    
    } else {
        /* $("#rightPanel").css({
            width: "710px",
            margin:"auto"
        }); */
        $("#vdo-wrap").removeClass("hide");
    }

    setTimeout(function (){
        $("[data-type='friends']").click();
    }, 2000);
    
});

