const app = "I don't do much."


function destructivelyPrependKitten(name) {
  window.kittens.unshift(name)
  return kittens
}

function destructivelyAppendKitten(name) {
  window.kittens.push(name)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift()
  return kittens

}

function destructivelyRemoveLastKitten() {
  window.kittens.pop()
  return kittens
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)

}

function removeFirstKitten() {
  return kittens.slice(1)
}
