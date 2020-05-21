export const escape = (input) => {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;',
    },
    reg = /[&<>"'/]/gi,
    output = input.replace(reg, (match) => map[match])
  return output
}

export const toText = (input) => {
  const output = document.createTextNode(input)
  return output
}
