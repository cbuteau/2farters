define('DS/Platorm/Widget', ['DS/Platform/Storage'], function(Storage) {

  function Widget() {
  }

  Widget.prototype = {
    getValue: function(name) {

    },
    setValue: function(name, value) {
      //need to come up with a mechanism that caches changes and then evetually forwards them to a webservice.

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
