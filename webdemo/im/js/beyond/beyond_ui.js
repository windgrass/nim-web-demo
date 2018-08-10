"use strict";

function curRoleIsTeacher() {
    if (userUID === '3') {
        return true;
    }
    return false;
}

function showTeacherDialog() {
    $("[data-account='3']").click();
}

$(document).ready(function () {
    if (curRoleIsTeacher()) {
        $("#left-panel").removeClass("hide");
        $("#chatVernier").removeClass("hide");
        $("#vdo-wrap").addClass("hide");
        $("#main-wrap").removeClass("by-w90");
        $("#main-wrap").addClass("by-w70");
    } else {
        $("#rightPanel").css({
            width: "710px",
            margin:"auto"
        });
        $("#vdo-wrap").removeClass("hide");
    }
});