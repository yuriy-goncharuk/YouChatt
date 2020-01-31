import { Observable } from "./observer";
import { Requests } from "./requests";
export class Controller extends Observable {
    constructor() {
        super();
    }
    on(obj, event, data) {
        if (event === "user_wants_to_send") {
            if (this.checkData(data)) {
                this.notifyAll("data_ok_lets_send_it", data);
            }
        }
        if (event === "login try") {
            Requests.getAuto(this, data[0], data[1]);
            return;
        }
    }
    autorizated(message) {
        alert(message);
        this.notifyAll("log in", null);
        Requests.InitMessages(this);
    }

    checkData(data) {
        if (data != "") return true;
    }
    sendAllMessages(messages) {
        this.notifyAll("init", messages)
    }
}
