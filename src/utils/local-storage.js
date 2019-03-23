export const takeIfExists = (key, type = String) => {
  const item = localStorage.getItem(key)
  if (item) {
    if (type === Number) return Number.parseFloat(item)
    if (type === Boolean) return { false: false, true: true }[item]
    if (type === Object || type === Array) return JSON.parse(item)
    if (item === 'undefined') return undefined
    if (item === 'null') return null

    return item
  }
}
