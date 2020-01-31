
import { Requests } from "./requests";

export class Message {
  constructor(content, date) {
    this.date = date;
    this.content = content;
  }
  delet() {
    Requests.Del(this);
  }
  edit() {
    Requests.Edit(this, prompt("", this.content));
  }
}
