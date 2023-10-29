import { taskUpdated, taskDeleted } from './actionTypes'

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated: {
      // логика поиска эл-ов
      const newArray = [...state]
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      )
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload }
      return newArray
    }

    // метод удаления
    case taskDeleted: {
      return state.filter((el) => el.id !== action.payload.id)
    }

    default:
      return state
  }
}
