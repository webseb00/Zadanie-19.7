import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT',
	   REMOVE_COMMENT = 'REMOVE_COMMENT',
	   EDIT_COMMENT = 'EDIT_COMMENT',
	   COMMENT_THUMB_UP = 'COMMENT_THUMB_UP',
	   COMMENT_THUMB_DOWN ='COMMENT_THUMB_DOWN';

export function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

export function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		id,
		text
	}
}

export function commentThumbUp(id) {
	return {
		type: COMMENT_THUMB_UP,
		id
	}
}

export function commentThumbDown(id) {
	return {
		type: COMMENT_THUMB_DOWN,
		id
	}
}

