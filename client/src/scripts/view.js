import { Observable } from "./observer";

export class View extends Observable {
    constructor() {
        super();
        const send_button = document.getElementById("button");
        this.input_field = document.getElementById("input");
        this.messagesBox = document.getElementById("messages");
        this.aoutowindow = document.getElementById("autenfication");
        this.username = document.getElementById("username");
        this.password = document.getElementById("password");

        this.password.addEventListener(
            "keyup",
            function (event) {
                if (event.keyCode === 13) {
                    this.notifyAll("login try", [
                        this.username.value,
                        this.password.value
                    ]);
                }
            }.bind(this)
        );

        send_button.addEventListener(
            "click",
            function (event) {
                this.notifyAll("user_wants_to_send", this.input_field.value);
            }.bind(this)
        );

        this.input_field.addEventListener(
            "keyup",
            function (event) {
                if (event.keyCode === 13) {
                    this.notifyAll("user_wants_to_send", this.input_field.value);
                }
            }.bind(this)
        );
    }
    putMessageIntoDoc(mess) {
        this.messagesBox.appendChild(this.messageInDiv(mess));
        this.input_field.value = "";
        let interval = this.messagesBox.scrollHeight;
        this.messagesBox.scrollTop = interval;
    }
    messageInDiv(message) {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        const content = document.createElement("div");
        content.className = "message_content";
        const info = document.createElement("div");
        info.className = "message_info";

        const editB = document.createElement("div");
        editB.className = "editB";
        editB.innerHTML = "редагувати";


        const delB = document.createElement("div");
        delB.className = "delB";
        delB.innerHTML = "видалити";

        const data = document.createElement("div");
        data.className = "data";


        content.innerHTML = message.content;
        data.innerHTML = message.date;



        bubble.appendChild(content);


        delB.addEventListener(
            "click",
            function (event) {
                message.delet();

                this.notifyAll("init");
            }.bind(this)
        );


        editB.addEventListener(
            "click",
            function (event) {
                message.edit();
                this.notifyAll("init");
            }.bind(this)
        );



        info.appendChild(editB);
        info.appendChild(delB);
        info.appendChild(data);

        bubble.appendChild(info);

        return bubble;
    }
    on(obj, event, data) {
        if (event === "view_clear_all") {
            console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
            this.messagesBox.innerHTML = ''
            this.notifyAll("megainit")
        }
        if (event === "view_take_this") {
            this.putMessageIntoDoc(data);
        }
        if (event === "log in") {
            this.aoutowindow.style.display = "none";
        }
    }
}
