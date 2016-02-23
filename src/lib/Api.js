export default new class Api {
  authorize(user, password) {
    // return a promise here
    return new Promise(resolve => {
      resolve({token: '123'})
    })
  }
  storeItem(item) {
    // localstorage here
  }
  clearItem(key) {
    // local storage here
  }
}
