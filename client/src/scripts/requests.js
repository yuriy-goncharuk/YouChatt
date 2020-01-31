export class Requests {
    static getAuto(controller, user, password) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `/login?user=${user}&password=${password}`, true);
        xhr.responseType = "text";
        xhr.onload = function (result) {
            if (xhr.readyState === xhr.DONE) {
                console.log("status" + xhr.status);
                if (xhr.status == 200) {
                    if (xhr.response != "Wrong pass")
                        controller.autorizated(xhr.response);
                    else {
                        alert("Wrong Password")
                    }
                    return;
                }
            }
        };
        xhr.send(null);
    }

    static InitMessages(controller) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `/init`, true);
        xhr.responseType = "text";
        xhr.onload = function (result) {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    controller.sendAllMessages(xhr.response);
                    return;
                }
            }
        };
        xhr.send(null);
    }
    static SendMessage(model, message) {
        var xhr = new XMLHttpRequest();
        console.log("________________");
        console.log(message);
        xhr.open("GET", `/message?message=${JSON.stringify(message)}`, true);
        xhr.responseType = "text";
        xhr.onload = function (result) {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    return;
                }
            }
        };
        xhr.send(null);
    }
}
