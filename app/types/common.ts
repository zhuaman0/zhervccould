export type ValueOf<T> = T[keyof T]

export type SelectOption<T = string> = {
  id: string
  name: T
}
