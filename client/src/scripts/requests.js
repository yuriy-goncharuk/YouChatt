export class Requests {
    static getAuto(controller, user, password) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `/login?user=${user}&password=${password}`, true);
        xhr.responseType = "text";
        xhr.onload = function (result) {
            if (xhr.readyState === xhr.DONE) {
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

    static Del(message) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `/del?message=${JSON.stringify(message)}`, true);
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

    static Edit(message, newval) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `/edit?message=${JSON.stringify(message)}&value=${JSON.stringify(newval)}`, true);
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


    static getData(model) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `/data`, true);
        xhr.responseType = "text";
        xhr.onload = function (result) {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    model.Refresh(xhr.response);
                }
            }
        };
        xhr.send(null);
    }
}
