import * as actionTypes from './actionTypes'

// action необходимо называть обратно действию
export function taskCompleted(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id, completed: true },
  }
}

// action необходимо называть обратно действию
export function titleChange(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id, title: `New title for ${id}` },
  }
}

// action необходимо называть обратно действию
export function taskDeleted(id) {
  return {
    type: actionTypes.taskDeleted,
    payload: { id },
  }
}
