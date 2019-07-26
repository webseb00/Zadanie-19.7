import React from 'react';
import Add from './CommentAddContainer';

class CommentAdd extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			text: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitComment = this.submitComment.bind(this);
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	submitComment() {
		const { text } = this.state;
		const { addComment } = this.props;
		if(text.length !== 0) {
			addComment(text);
			this.setState({ text: '' });
		} else {
			alert('Please fill the form!');
		}
		
	}

	render() {
		return (
			<div className="commentAdd">
				<textarea
					type="text"
					name="text"
					value={this.state.text}
					onChange={(e) => this.handleChange(e)}
					placeholder="Add your comment"
					className="commentAdd-input"
				>
				</textarea>
				<button onClick={this.submitComment} className="commentAdd-btn">Add Comment</button>
			</div>
		)
	}
}

export default CommentAdd;