export function serializeParams(params: Record<string, unknown>): string {
  const query = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') return

    if (value && Array.isArray(value) && value.length === 0) return

    if (value && Array.isArray(value)) {
      value.forEach(v => query.append(key, String(v)))
      return
    }

    if (value) {
      query.append(key, String(value))
    }
  })

  return query.toString()
}
