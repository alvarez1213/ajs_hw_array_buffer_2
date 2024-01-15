export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
    this.bufferInString = '';
  }

  load(buffer) {
    this.buffer = new Uint16Array(buffer);
  }

  toString() {
    for (let i = 0; i < this.buffer.length; i += 1) {
      this.bufferInString += String.fromCharCode(this.buffer[i]);
    }
  }
}
