function checkFunc (listener) {
  if (!listener instanceof Function) {
    throw new Error(
      " The listener argument must be of type Function. "
    );
  }
}

export default class EventEmitter {
  constructor () {
    this.listeners = {};
  }

  on (eventName, listener) {
    checkFunc(listener)
    let listeners = this.listeners[eventName]
    if (!listeners) {
      this.listeners[eventName] = [listener]
    }
    else {
      listeners.push(listener)
    }
  }

  off (eventName, listener) {
    let listeners = this.listeners[eventName]
    if (listeners && listeners.length) {
      const index = listeners.indexOf(listener)
      index > -1 && listeners.splice(index, 1)
    }
  }


  emit (eventName, ...args) {
    let listeners = this.listeners[eventName] || []
    listeners.forEach(fn => {
        try {
          fn.call(this, ...args)
        } catch (err) {
          console.error(err);
        }
      }
    );
  }

  clear () {
    this.listeners = {};
  }
}
