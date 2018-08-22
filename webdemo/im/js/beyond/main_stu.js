/* TODO: 目前使用静态数据, 后期需要改成后台获取 */
var courseId = 3;
var courseSubId = 2;
var totalLevel = 0;
/* ----------------------- */


// 收到通讯服的消息时触发
function onmessage(msg) {
    var data = JSON.parse(msg['data']);
    if (data['type'] != 'ping') {
        console.log('显示返回信息:');
        console.log(msg);
    } else {
        return;
    }

    switch (data['cmd']) { // 根据通讯服务器返回的cmd, 进行处理
        case 'connect':
            pConnect(data);
            break;
        case 'game_control_cmd': // 获取游戏状态
            updateGameStatus(data);
            break;
        case 'report_game_level':
            updateCurLevel(data); // 更新当前进度
            break;
        case 'report_game_piece':
            updateCurPieces(data); // 更新棋子位置
            break;
        default:
            showProtocol(JSON.parse(msg.data));
            break;
    }
}

// game_control_cmd 返回消息后,更新游戏状态
function updateGameStatus(data) {
    if (data['code'] == 0) {
        var curSn = data['sor_id'];
        // var gamenameen = data['data']['game_name'];

        var totalLever = data['total_level']; // 总进度
        console.log('游戏总进度: ' + totalLever);
        // $('#stuLevel' + dsn).html(status);
        showStuTotalLevel('stuLevel', totalLever);

    } else if (data['code'] == -1) {
        curSn = data['sor_id'];
        if (curSn != 'cs') {
            $('#mode' + dsn).html("<?=Yii::t('psSchool/lesson/readyLesson', '家庭版')?>");
            alert('贝板【' + curSn + '】处于家庭版模式，不能进行控制');
        }
    } else if (data['sor_id' == 'cs']) {
        var dsn = data['sor_id'];
        $('#state' + dsn).html("<?=Yii::t('psSchool/lesson/readyLesson', '不在线')?>");
        $('#gameid' + dsn).html('');
    }
    console.log(data);
}


$(document).ready(function () {
    $("#start-game").bind("click", function () {
        sendStartGame(); // 启动游戏
        getGamePieces(); // 获取棋子位置
    });
});

// 发送当前课程的信息
function sendStartGame() {
    var devsn = '000123456789';
    var pd = ProtocolData;
    pd['cmd'] = 'game_control_cmd';
    pd['des_id'] = devsn;
    pd['game_cmd'] = 'start';
    pd['game_pkg'] = 'com.beyondscreen.sudukuv3';
    pd['course_id'] = courseId;
    pd['course_sub_id'] = courseSubId;

    ws.sendMsg(pd);
}

// get 棋子位置
function getGamePieces() {
    var devsn = '000123456789';
    var pd = ProtocolData;
    pd['cmd'] = 'get_game_piece';
    pd['des_id'] = devsn;

    ws.sendMsg(pd);
}

// 显示学生总进度
function showStuTotalLevel(eleId, num) {
    totalLevel = num; // 保存总进度

    var jqObj = $('#' + eleId);
    for (var i = 0; i < num; i++) {
        jqObj.append('<i class="by-mg2 fa fa-square-o"></i>');
    }
    return num;
}

// 更新当前进度
function updateCurLevel(data) {
    var curLevel = data['cur_level'];
    console.log('当前进度: ' + curLevel);

    var lis = $('#stuLevel').children();
    for (var i = 0, len = curLevel - 1; i < len; i++) {
        $(lis[i]).removeClass('fa-square-o');
        $(lis[i]).addClass('fa-check-square-o');
    }
}

// 更新棋子位置
function updateCurPieces(data) {
    var curPieces = data['piece_site'];
    console.log(curPieces);

    for (var k in curPieces) {
        console.log(k);
        var pieceImg = './images/beyond/falao/' + curPieces[k]['color'] + '_' + curPieces[k]['piece'] + '.png';

        $(".map-item-" + k).removeClass('by-opacity');
        $(".map-item-" + k).attr({
            "src": pieceImg
        })
    }
}

