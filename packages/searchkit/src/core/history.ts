import { createBrowserHistory, createMemoryHistory,  History } from 'history'
const qs = require("qs")

export const encodeObjUrl = (obj) => {
  return qs.stringify(obj, { encode: true, encodeValuesOnly: true })
}

export const decodeObjString = (str) => {
  return qs.parse(str, { arrayLimit: 1000 })
}

export const supportsHistory = ()=> {
  return typeof window !== 'undefined' && !!window.history
}

export const createHistoryInstance = function():History{
  return supportsHistory() ? createBrowserHistory() : createMemoryHistory()
}
