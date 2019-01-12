const User = function(name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },

  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // single user message
        to.receive(message, from);
      } else {
        //   broadcast
        for (let key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  };
};

// Create users
const brad = new User("Brad");
const jeff = new User("Jeff");
const sarah = new User("Sarah");

// Chatroom
const chatroom = new Chatroom();
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);

// Messages
brad.send("Hello, Jeff", jeff);
sarah.send("Hello Brad. you're best", brad);
jeff.send("hello world");
