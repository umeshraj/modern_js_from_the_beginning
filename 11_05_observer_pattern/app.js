function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },

  unsubscribe: function(fn) {
    // Filter out functions
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },

  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();
// event listeners
document.querySelector(".sub-ms").addEventListener("click", function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".fire").addEventListener("click", function() {
  click.fire();
});

// click handles
const getCurMilliseconds = function() {
  console.log(`Current ms: ${new Date().getMilliseconds()}`);
};
