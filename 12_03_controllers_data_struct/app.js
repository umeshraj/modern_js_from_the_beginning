// Storage controller

// Item controller (module pattern!)
const ItemCtrl = (function() {
  // Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data structure / state
  const data = {
    items: [
      { id: 0, name: "Steak dinner", calories: 1200 },
      { id: 1, name: "Cookie", calories: 400 },
      { id: 2, name: "Eggs", calories: 300 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  // Public methods
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  };
})();

// UI controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: "#item-list"
  };

  // Public methods
  return {
    populateItemList(items) {
      let html = ``;
      items.forEach(function(item) {
        html += `
          <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories </em>
          <a href="" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li> 
          `;
      });

      //   Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  };
})();

// App controller
const App = (function(ItemCtrl, UICtrl) {
  // Public methods
  return {
    init: function() {
      //   fetch items from data strcuture
      const items = ItemCtrl.getItems();
      // populate list with items
      UICtrl.populateItemList(items);
      console.log(items);
    }
  };
})(ItemCtrl, UICtrl);

// Initialize App
App.init();
