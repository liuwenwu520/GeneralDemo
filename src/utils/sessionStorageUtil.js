let session = {
  obj: window.sessionStorage,
  get (key) {
    let result = session.obj.getItem(key)
    if (result) {
      return result
    } else {
      return null
    }
  },
  set (key, value) {
    if (key) {
      session.obj.setItem(key, value)
    }
  }
}
export default session
