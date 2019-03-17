define('DS/Platorm/Widget', ['DS/Platform/Storage'], function(Storage) {

  function Widget() {
  }

  Widget.prototype = {
    getValue: function(name) {

    },
    setValue: function(name, value) {

    }
  };

  Object.defineProperties(Widget.prototype, {
    storage: {
      value: Storage,
      writable: false
    }
  });

  return Widget;
});
