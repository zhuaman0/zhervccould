export const LocalStorage = {
  state: {},

  get(key: string) {
    return localStorage.getItem(key)
  },

  set() {},

  parse() {},
}
