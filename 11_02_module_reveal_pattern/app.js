// Basic structure

(function() {
  // Declare private vars and functions here

  return {
    // Declare public
  };
})();

// STANDARD MODULE PATTERN
const UICtrl = (function() {
  // private
  let text = "Hello, World!";

  const changeText = function() {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item added..");
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  //   This return reveals the inner functions
  return {
    add: add,
    get: get
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Jack" });
console.log(ItemCtrl.get(1));
