var timerId

const throttle = (func, delay) => {
  if (timerId) {
    return
  }

  timerId = setTimeout(function () {
    func()
    timerId = undefined
  }, delay)
}

export default throttle