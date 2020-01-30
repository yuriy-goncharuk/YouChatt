export class Requests {
    static getAuto(controller, user, password) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `/login?user=${user}&password=${password}`, true);
        xhr.responseType = "text";
        xhr.onload = function (result) {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    controller.autorizated();
                    return;
                }
            }
        };
        xhr.send(null);
    }
}
