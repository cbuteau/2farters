define('DS/Platform/Storage', [], function() {

  function isString(value) {
    if (value.trim && value.indexOf && value.toLowerCase && value.toUpperCase) {
      return true;
    }

    return false;
  }

  function isJSON(value) {
    if (isString(value) && value.length > 0 && value.charAt(0) === '{') {
      return true;
    }
  }

  function StorageProxy(storage) {
    this.actualStorage = storage;
  }

  StorageProxy.prototype = {
    get: function(key) {
      var actual = this.actualStorage.getItem(key);
      var result = actual;
      if (isJSON(actual)) {
        result = JSON.parse(actual);
      }

      return result;
    },
    set: function(key, value) {
      var tostore = value;
      if (typeof value === 'object') {
        tostore = JSON.stringify(value);
      }
      return this.actualStorage.setItem(key, tostore);
    },
    del: function(key) {
      return this.actualStorage.removeItem(key);
    },
    clear: function() {
      this.actualStorage.clear();
    }
  }



  function Storage() {}

  Object.defineProperties({
    local: {
      value: new StorageProxy(localStorage),
      writable: false
    },
    sess: {
      value: new StorageProxy(sessionStorage),
      writable: false
    }
  });

  var instance;
  if (!instance) {
    instance = new Storage();
  }

  return instance;
});
