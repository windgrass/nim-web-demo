/*
 * websocket 
 * 与贝板通信
 */

$(document).ready(function () {
    connectToPS();
});


/* -------------------- websocket 系列---------------------- */
//  制造 uid, 客户端序列号
function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

function guid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4());
}
var sorid = 'edu_demo_' + guid();
sorid = 'edu_demo_00000012345678'; // TODO: 测试阶段使用

var ws;
var lastProtocol = [];
var ProtocolData = { // 初始化协议
    'cmd': '',
    'sor_id': sorid,
    'des_id': ''
};


// 链接通讯服
function connectToPS() {
    // 创建websocket
    ws = new WebSocket("ws://" + document.domain + ":7272");
    // 当socket连接打开时，输入用户名
    //ws.onopen = onopen;

    // 当有消息时根据消息类型显示不同信息
    ws.onmessage = onmessage;

    ws.onclose = function () {
        console.log("连接关闭，定时重连");
        connectToPS();
    };

    ws.onerror = function () {
        console.log("出现错误");
    };

    ws.sendMsg = function (data) {
        if (typeof (data) == 'object') {
            if (null == data['des_id'] || undefined == data['des_id'] || data['des_id'].length < 2) {
                console.warn('des_id is empty');
                // sendError(Json.stringify(data));
            }
            data['protocol'] = 'ws';
            data = JSON.stringify(data);
        }
        console.log(data);
        this.send(data);
    }
}

function pConnect(data) {
    var pd = JSON.parse(JSON.stringify(ProtocolData));
    pd['cmd'] = 'login';
    pd['des_id'] = 'cs';
    ws.sendMsg(pd);
}

function showProtocol(data) {
    console.log(data);
}


/* setTimeout('sendgameStatus()', 2000); // 待建立websocket连接后再调用 获取贝板当前状态
function sendgameStatus() {
    $('.boardinfo').each(function (i, n) {
        var devsn = $(this).find('.devsn').html();
        var pd = JSON.parse(JSON.stringify(ProtocolData));

        pd['cmd'] = 'get_game_status';
        pd['des_id'] = devsn;

        ws.sendMsg(pd);
    });
} */

/* function intervalGetGameStatus() { // 定时获取贝板游戏状态
    setTimeout(function getGameStatus() {
        sendgameStatus();
        setTimeout(function () {
            getGameStatus()
        }, 2000);
    }, 3000);
} */


/* function sendError(data) {
    var url = window.location.href;
    $.post('addErrorLog.html', {
            "url": url,
            "data": data
        },
        function (data, status) {
            console.log("Data: " + data);
            if (status == 'success') {
                console.log("sendError success");
                console.log(data);
            } else {
                console.log("sendError failed");
            }
        });
} */




