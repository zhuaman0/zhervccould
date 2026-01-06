export const LocalStorage = {
  get(key: string) {
    return localStorage.getItem(key)
  },

  set(value: string) {
    return localStorage.setItem('token', value)
  },
}
