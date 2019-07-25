import React from 'react';

const Comment = ({ text, value, id, commentThumbUp, commentThumbDown, removeComment }) => 
	<li className="commentItem">
		{text} 
		<div className="commentItem-buttons">
			<button onClick={() => commentThumbUp(id)} className="fas fa-thumbs-up btn btn-up"></button>
			<button onClick={() => commentThumbDown(id)} className="fas fa-thumbs-down btn btn-down"></button>
			<button onClick={() => removeComment(id)} className="fas fa-times btn btn-remove"></button>
			<span>votes: {value}</span>
		</div>
	</li>

export default Comment;