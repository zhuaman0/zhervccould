export const pathService = {
  state: {},

  get() {
    const route = useRoute()
    return route.fullPath
  },
}
