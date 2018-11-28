let nextTodoId = 0
export const addCandidate = text => ({
 type: 'ADD_CANDIDATE',
 id: nextTodoId++,
 vote: 0,
 text
})

export const voteCandidate = id => ({
 type: 'VOTE_CANDIDATE',
 id
})

export const ModalAction = {
  MODAL_OPEN : "MODAL_OPEN",
  MODAL_CLOSE : "MODAL_CLOSE",
}
