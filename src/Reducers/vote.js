const vote = (state= [], action) => {
	switch(action.type){
		case 'ADD_CANDIDATE':
			return [
				...state, {
					text : action.text,
					id : action.id,
					vote : action.vote,
					completed : false
				}
			]
		case 'VOTE_CANDIDATE':
			return state.map( vote =>
				(vote.id === action.id)
				? {...vote, completed: !vote.completed, vote : vote.vote+1}
				: vote
			)
		default :
			return state
	}
}

export default vote
