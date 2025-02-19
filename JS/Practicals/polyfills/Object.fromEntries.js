if (!Object.fromEntries) {
    Object.fromEntries = function (entries) {
      if (!entries || !entries[Symbol.iterator]) {
        throw new Error('Object.fromEntries() requires a single iterable argument');
      }
      let obj = {};
      for (let [key, value] of entries) {
        obj[key] = value;
      }
      return obj;
    };
  }

