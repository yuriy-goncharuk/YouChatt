!function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);class n{constructor(){this.observers=[]}addObserver(e){this.observers.push(e)}delObserver(e){this.observers.splice(this.observers.indexOf(e))}notifyAll(e,t){console.log(e);for(var s=0;s<this.observers.length;s++)this.observers[s].on(this,e,t)}}class o extends n{constructor(){super();const e=document.getElementById("button");this.input_field=document.getElementById("input"),this.messagesBox=document.getElementById("messages"),this.aoutowindow=document.getElementById("autenfication"),this.username=document.getElementById("username"),this.password=document.getElementById("password"),this.password.addEventListener("keyup",function(e){13===e.keyCode&&(this.notifyAll("login try",[this.username.value,this.password.value]),this.aoutowindow.style.display="none")}.bind(this)),e.addEventListener("click",function(e){this.notifyAll("user_wants_to_send",this.input_field.value),this.putMessageIntoDoc(this.input_field.value)}.bind(this)),this.input_field.addEventListener("keyup",function(e){13===e.keyCode&&(this.notifyAll("user_wants_to_send",this.input_field.value),this.putMessageIntoDoc(this.input_field.value))}.bind(this))}putMessageIntoDoc(e){this.messagesBox.appendChild(this.messageInDiv(e)),this.input_field.value="";let t=this.messagesBox.scrollHeight;this.messagesBox.scrollTop=t}messageInDiv(e){const t=document.createElement("div");t.className="bubble";const s=document.createElement("div");s.className="message_content";const n=document.createElement("div");return n.className="message_info",s.innerHTML=e.content,n.innerHTML=e.date,t.appendChild(s),t.appendChild(n),t}on(e,t,s){"view_take_this"==t&&this.putMessageIntoDoc(s),"log in"==t&&(this.aoutowindow.style.display="none")}}class i{constructor(e){const t=new Date,s=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+(t.getHours()+":"+t.getMinutes()+":"+t.getSeconds());this.date=s,this.content=e}}class r extends n{constructor(){super(),this.messages=[]}addMessage(e){this.messages.push(new i(e))}putLastMessageIntoView(){this.notifyAll("view_take_this",this.messages[this.messages.length-1])}on(e,t,s){"data_ok_lets_send_it"==t&&(this.addMessage(s),this.putLastMessageIntoView())}}class a extends n{constructor(){super()}on(e,t,s){"user_wants_to_send"==t&&this.checkData(s)&&this.notifyAll("data_ok_lets_send_it",s),s&&class{static getAuto(e,t,s){var n=new XMLHttpRequest;n.open("GET",`/login?user=${t}&password=${s}`,!0),n.responseType="text",n.onload=function(t){n.readyState!==n.DONE||200!==n.status||e.autorizated()},n.send(null)}}.getAuto(this,s[0],s[1])}autorizated(){this.notifyAll("log in",null)}checkData(e){if(""!=e)return!0}}window.addEventListener("DOMContentLoaded",(function(){{const e=new o,t=new r,s=new a;e.addObserver(s),t.addObserver(s),t.addObserver(e),s.addObserver(t),s.addObserver(e)}}))}]);