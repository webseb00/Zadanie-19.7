import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, COMMENT_THUMB_UP, COMMENT_THUMB_DOWN } from './action.js';

function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				value: 0
			}
			,...state];

		case REMOVE_COMMENT:
			return state.filter(comment => comment.id !== action.id)

		case EDIT_COMMENT:
			return state.filter(comment => (comment.id === action.id) ? {text: action.text} : comment)
			
		case COMMENT_THUMB_UP:
			return state.filter(comment => (comment.id === action.id) ? {value: comment.value++} : comment)

		case COMMENT_THUMB_DOWN:
			return state.filter(comment => (comment.id === action.id) ? {value: comment.value--} : comment)
			
		default:
			return state;
	}
}

export default comments;