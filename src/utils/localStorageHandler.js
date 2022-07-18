
const get = (key) => JSON.parse(localStorage.getItem(key)) || []

const set = (key, value) => { localStorage.setItem(key, JSON.stringify(value)) }


export default {
  get,
  set
}
