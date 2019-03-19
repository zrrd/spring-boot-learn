let websocket = null;
//判断当前浏览器是否支持
if ('WebSocket' in window) {
    websocket = new WebSocket("ws://localhost:8080/ws")
} else {
    alert('not support websocket')
}

//连接发生错误的回调方法
websocket.onerror = function () {
    appendMessage("error");
};

//接受到消息的回调方法
websocket.onmessage = function (event) {
    appendMessage(event.data);
};

websocket.onclose = function () {
    appendMessage("close");
};

//发送消息
function sendMessage() {
    const message = $("#message").val();
    websocket.send(message);
}

//关闭连接
function closeWebSocket() {
    websocket.close();
}

//将消息显示在网页上
function appendMessage(message) {
    const context = $("#context").html() + "<br/>" + message;
    $("#context").html(context);
}

//监听窗口关闭事件 当窗口关闭时 主动关闭websocket连接
//防止连接还没断开就关闭窗口 server端会抛异常
window.onbeforeunload = function () {
    websocket.close();
};