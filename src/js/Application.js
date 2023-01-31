import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;

    const emojisElement = document.querySelector('#emojis')
    emojisElement.innerHTML = '';

    const paragraph = document.createElement('p').textContent = this.emojis;
    emojisElement.append(paragraph);
  }

  addBananas() {
    this.emojis = this.emojis.map((monkey) => monkey + this.banana);
    this.setEmojis(this.emojis);
  }
}
