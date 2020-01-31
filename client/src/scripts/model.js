import { Observable } from "./observer";
import { Message } from "./message";
import { Requests } from "./requests";
export class Model extends Observable {
  constructor() {
    super();
    this.messages = [];
  }
  addMessage(content) {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    this.messages.push(new Message(content, dateTime));
  }
  addMessage1(content, date) {
    this.messages.push(new Message(content, date));
  }
  putLastMessageIntoView() {
    this.notifyAll("view_take_this", this.messages[this.messages.length - 1]);
  }
  on(obj, event, data) {
    if (event == "data_ok_lets_send_it") {
      this.addMessage(data);
      this.putLastMessageIntoView();
      Requests.SendMessage(this, this.messages[this.messages.length - 1]);
    }
    if (event == "init") {
      data = JSON.parse(data)

      for (let i = 0; i < data.length; i++) {
        this.addMessage1(data[i].content, data[i].date);
        this.putLastMessageIntoView();
      }
    }
  }
}
