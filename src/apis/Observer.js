export var Subject = function() {
  var observers = [];

  return {
    subscribeObserver: function(observer) {
      observers.push(observer);
    },
    unsubscribeObserver: function(observer) {
      var index = observers.indexOf(observer);
      if (index > -1) {
        observers.splice(index, 1);
      }
    },
    notifyObserver: function(observer) {
      var index = observers.indexOf(observer);
      if (index > -1) {
        observers[index].notify(index);
      }
    },
    notifyAllObservers: function() {
      for (var i = 0; i < observers.length; i++) {
        observers[i].notify(i);
      }
    }
  };
};
