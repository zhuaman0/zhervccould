export function useInputControl() {
  const value = ref('')
  const error = ref('')

  function validate() {
    if (!value) {
      error.value = 'This field is required.'
    } else {
      error.value = ''
    }
  }

  return {
    value,
    error,
    validate,
  }
}
