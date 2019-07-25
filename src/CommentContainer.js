import { connect } from 'react-redux';
import Comment from './Comment';
import { commentThumbUp, commentThumbDown, removeComment } from './action';

const mapDispatchToProps = dispatch => ({
	commentThumbUp: (id) => dispatch(commentThumbUp(id)),
	commentThumbDown: (id) => dispatch(commentThumbDown(id)),
	removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);