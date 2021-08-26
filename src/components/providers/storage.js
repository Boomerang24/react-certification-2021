export const storage = {
  get(key) {
    try {
      const Value = window.localStorage.getItem(key);
      return JSON.parse(Value);
    } catch (error) {
      console.log(`Error parsing the storage item "${key}`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key) {
    window.localStorage.removeItem(key);
  },
};
