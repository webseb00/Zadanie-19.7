import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({ comments }) => 
	<ul className="commentsList">
		{comments.map(comment => <Comment key={comment.id} {...comment} />)}
	</ul>;

export default CommentsList;