export function createStore(reducer, initialState) {
  let state = initialState
  // массив для хранения слушателей
  let listeners = []

  function getState() {
    return state
  }
  function dispatch(action) {
    state = reducer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }
  // добавляет новых слушателей, которым необходимо получать обновления
  function subscribe(listener) {
    listeners.push(listener)
  }

  return { getState, dispatch, subscribe }
}
