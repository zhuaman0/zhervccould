export type ValueOf<T> = T[keyof T]

export type SelectOption<T = string> = {
  label: string
  value: T
}
