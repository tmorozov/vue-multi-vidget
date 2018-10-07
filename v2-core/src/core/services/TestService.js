let count = 0

function inc () {
  count = count + 1
}

function getValue () {
  return count
}

export default {
  getValue,
  inc
}
