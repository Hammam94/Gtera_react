export const add = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const get = key => {
  return window.localStorage.getItem(key);
};

export default {
  add,
  get
};
