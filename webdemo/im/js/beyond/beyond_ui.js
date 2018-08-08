"use strict";

function curRoleIsTeacher() {
    if (userUID === 'tywali') {
        return true;
    }
    return false;
}

function showTeacherDialog() {
    $("[data-account='tywali']").click();
}

$(document).ready(function () {
    if (curRoleIsTeacher()) {
        $("#left-panel").removeClass("hide");
        $("#chatVernier").removeClass("hide");
    } else {
        $("#rightPanel").css({
            width: "710px",
            margin:"auto"
        });
    }
});